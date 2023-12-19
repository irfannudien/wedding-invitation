import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import Gate from "../../components/Gate";
import db from "../../Firebase";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import "./rsvp.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import { BiSolidBadgeCheck, BiSolidXCircle } from "react-icons/bi";
import * as Yup from "yup";

import ImgLogo from "../../assets/cover.png";
import aos from "aos";

export default function Rsvp() {
  const [data, setData] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadData, setLoadData] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const validationSchema = Yup.object().shape({
    id: Yup.number(),
    nama: Yup.string().required("Isi nama anda"),
    ucapan: Yup.string().required("Tulis ucapan anda"),
    konfirmasi: Yup.string().required("Konfirmasi kehadiran anda"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      const id = idCounter;
      const docRef = await addDoc(collection(db, "guestList"), {
        ...values,
        id: id,
        timestamp: serverTimestamp(),
      });
      console.log("DATA CREATE: ", docRef.id);

      setData([{ id, ...values }, ...data]);
      resetForm();
      setLoading(false);

      setIdCounter(idCounter + 1);
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "guestList"),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);

        // Process the snapshot to extract data and store it in the state
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Update the state with the fetched data
        setData(newData);

        if (newData.length > 0) {
          const lastId = newData[0].id;
          setIdCounter(lastId + 1);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
        setLoadData(false);
      }
    };

    fetchData();
  }, []);

  // =========== aos animation ============
  useEffect(() => {
    aos.init({ duration: 2000, once: false });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const dataShow = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePage = (index) => {
    setCurrentPage(index + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const handlers = useSwipeable({
  //   onSwipedUp: () => handleSwipe(-1),
  //   onSwipedDown: () => handleSwipe(1),
  //   trackTouch: true,
  // });

  // const handleSwipe = (deltaY, event) => {
  //   const isRsvpSwipeDisabled =
  //     rsvpRef.current && rsvpRef.current.isSwipeDisabled();

  //   if (!isRsvpSwipeDisabled) {
  //     const scrollUl = document.getElementById("data-rsvp");

  //     // Pengecekan apakah elemen yang disentuh memiliki ID "data-rsvp"
  //     if (
  //       scrollUl &&
  //       (scrollUl.contains(event.target) || scrollUl === event.target)
  //     ) {
  //       return;
  //     }

  //     if (deltaY > 0) {
  //       setActivePage((prevPage) => (prevPage === 6 ? 6 : prevPage + 1));
  //     } else if (deltaY < 0) {
  //       setActivePage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  //     }
  //   }
  // };

  return (
    <Background>
      <Gate />

      <div className="rsvp-container" id="rsvp">
        <span data-aos="fade-down" className="text-rsvp">
          Ucapan & Doa
        </span>

        {loading && (
          <div className="loading">
            <Spinner animation="grow" />
          </div>
        )}
        <Formik
          initialValues={{
            nama: "",
            ucapan: "",
            konfirmasi: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form
              as={FormikForm}
              noValidate
              data-aos="fade-down"
              className="form-container"
            >
              <Form.Group controlId="nama" className="form-field mb-2">
                <Form.Control
                  required
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  className="form-input"
                  value={values.nama}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nama && errors.nama}
                />
                <Form.Control.Feedback
                  type="invalid"
                  style={{ textAlign: "left" }}
                >
                  Isi nama anda
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="ucapan" className="form-field mb-2">
                <Form.Control
                  required
                  type="text"
                  name="ucapan"
                  placeholder="Ucapan & do'a"
                  as="textarea"
                  className="form-input"
                  value={values.ucapan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.ucapan && errors.ucapan}
                />
                <Form.Control.Feedback
                  type="invalid"
                  style={{ textAlign: "left" }}
                >
                  Tulis ucapan anda
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="konfirmasi" className="form-field mb-2">
                <Form.Control
                  required
                  type="text"
                  name="konfirmasi"
                  as={Form.Select}
                  className="form-input"
                  value={values.konfirmasi}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.konfirmasi && errors.konfirmasi}
                >
                  <option value="">Konfirmasi kehadiran</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </Form.Control>
                <Form.Control.Feedback
                  type="invalid"
                  style={{ textAlign: "left" }}
                >
                  Konfirmasi kehadiran anda
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="button-rsvp" type="submit">
                Kirim
              </Button>
            </Form>
          )}
        </Formik>

        <div id="data-rsvp" data-aos="fade-up">
          {loadData ? (
            <Spinner animation="grow" />
          ) : (
            <ul>
              {dataShow.map((item) => (
                <li key={item.id} className="fadeIn">
                  <div>
                    <div
                      style={{
                        float: "left",
                        padding: 2,
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "rgba(53, 59, 65, 0.8)",
                        marginTop: 2,
                      }}
                    >
                      <img alt="" src={ImgLogo} style={{ maxWidth: 20 }} />
                    </div>

                    <div
                      className="comments"
                      style={{ marginLeft: "40px", textAlign: "left" }}
                    >
                      <div
                        className="comments-info"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.25rem",
                          lineHeight: 1.6,
                          fontFamily: "Arsenal, cursive",
                        }}
                      >
                        <span>{item.nama}</span>
                        {item.konfirmasi === "Ya" ? (
                          <span>
                            <BiSolidBadgeCheck size={20} color="green" />
                          </span>
                        ) : (
                          <span>
                            <BiSolidXCircle size={20} color="red" />
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontFamily: "Marcellus, serif",
                          fontSize: 14,
                        }}
                      >
                        <p style={{ wordWrap: "break-word", marginBottom: 0 }}>
                          {item.ucapan}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {data.length > 10 && (
          <div className="pagination">
            <span
              onClick={handlePrev}
              className={
                currentPage === 1
                  ? "page-disabled button-pagination"
                  : "page button-pagination"
              }
            >
              &larr; Prev
            </span>

            {[...Array(totalPages).keys()].map((index) => (
              <span
                key={index}
                onClick={() => handlePage(index)}
                className={
                  currentPage === index + 1
                    ? "active-page button-pagination"
                    : "inactive-page button-pagination"
                }
              >
                {index + 1}
              </span>
            ))}

            <span
              onClick={handleNext}
              className={
                currentPage === totalPages
                  ? "page-disabled button-pagination"
                  : "page button-pagination"
              }
            >
              Next &rarr;
            </span>
          </div>
        )}
      </div>
    </Background>
  );
}
