import React from "react";
import Menucard from "./Menucard";

import Martabak from "../../img/martabak.jpg";
import Dorito from "../../img/menu-dorito.png";
import Doritotwo from "../../img/menu-dorito-2.png";
import Lays from "../../img/menu-lays.png";
import Chitato from "../../img/menu-chitato.png";
import Spesial from "../../img/Martabak spesial.png";
import Nasibeef from "../../img/menu-nasi-jepang.png";
import Nasibeeftwo from "../../img/menu-nasi-jepang-2.png";
import Minum1 from "../../img/menu-minuman.png";
import Minum2 from "../../img/menu-minuman-2.png";
import Minum3 from "../../img/menu-minuman-3.png";
import Minum4 from "../../img/menu-minuman-4.png";
import Minum5 from "../../img/menu-minuman-5.png";
import Minum6 from "../../img/menu-minuman-6.png";
import brandimg from "../../img/brand-img.jpg";
import outlet1 from "../../img/outlet-3.jpeg";
import outlet2 from "../../img/outlet-2.JPG";
import outlet3 from "../../img/outlet.png";

import firebase from "firebase/app";
import "firebase/firestore";

const Main = () => {
  const martabakmenu = [
    {
      nama: "Martabak Doritos",
      rasa: "Barbeque Nacho Cheese",
      imgsrc: Dorito
    },
    {
      nama: "Martabak Doritos",
      rasa: "Roasted Corn",
      imgsrc: Doritotwo
    },
    {
      nama: "Martabak Lays",
      rasa: "Salmon Teriyaki Rumput Laut",
      imgsrc: Lays
    },
    {
      nama: "Martabak Chitato",
      rasa: "Sapi Panggang",
      imgsrc: Chitato
    },
    {
      nama: "Martabak Special",
      rasa: "Topping Mix",
      imgsrc: Spesial
    }
  ];
  const nasimenu = [
    {
      nama: "-Beef Mozarella-",
      type: "nasi",
      imgsrc: Nasibeef
    },
    {
      nama: "-Tako Mozarella-",
      type: "nasi",
      imgsrc: Nasibeeftwo
    }
  ];
  const minumanmenu = [
    {
      nama: "Creamy Chocolate",
      type: "minuman",
      imgsrc: Minum1
    },
    {
      nama: "Creamy Coffee",
      type: "minuman",
      imgsrc: Minum2
    },
    {
      nama: "Green Thai Tea",
      type: "minuman",
      imgsrc: Minum3
    },
    {
      nama: "Lemon Greentea",
      type: "minuman",
      imgsrc: Minum4
    },
    {
      nama: "Original Thai Tea",
      type: "minuman",
      imgsrc: Minum5
    },
    {
      nama: "Lemon Tea",
      type: "minuman",
      imgsrc: Minum6
    }
  ];
  const submitFunc = event => {
    event.preventDefault();
    let isError = false;
    let phoneexp = document.querySelectorAll(".input-item")[1].value;
    document.querySelectorAll(".input-item").forEach(a => {
      if (a.value === "") {
        isError = true;
      }
    });
    if (isError) {
      alert("Mohon lengkapi data anda");
    } else if (isNaN(phoneexp)) {
      alert("Mohon isi data anda secara tepat");
    } else {
      let time = new Date().toString().slice(0, 25);
      const rootRef = firebase
        .firestore()
        .collection("submitted-form")
        .doc(time);
      let [
        nama,
        usia,
        pekerjaan,
        alamat,
        lokasi,
        pengalaman
      ] = document.querySelectorAll(".input-item");
      let data = {
        nama: nama.value,
        usia: usia.value,
        pekerjaan: pekerjaan.value,
        alamat: alamat.value,
        lokasi: lokasi.value,
        pengalaman: pengalaman.value
      };
      rootRef
        .set({ data }, { merge: true })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        })
        .then(function() {
          document.getElementById("dl-link").click();
        });
    }
  };
  return (
    <>
      {/* topsection */}
      <div id="topsection">
        <div className="brandtext">
          <h1>Martabak Jepang Jony</h1>
          <p>-Not Your Ordinary Martabak-</p>
        </div>
      </div>
      <div id="midsection" className="py-5">
        <div className="container row midsectioncontainer">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <img src={Martabak} alt="martabak" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column pt-5 justify-content-center">
              <h1 className="header">
                <span> Tentang Kami </span>
              </h1>
              <p className="text">
                Martabak Jepang Jony merupakan produk orisinil yang tidak meniru
                produk-produk dari brand lainnya. Martabak Jepang Jony memiliki
                ciri khas yang tidak dimiliki oleh produk makanan apapun yaitu
                terdapat kripik lays & doritos di atasnya. Produk kami
                menawarkan makanan yang unik dan inovatif sehingga banyak
                digandrungi oleh kaum milenial baik pria maupun wanita. Dengan
                pengalaman yang kami miliki dan teknik khusus yang kami gunakan,
                kami berupaya menghadirkan originalitas dalam bisnis. Kami
                bekerja dengan hati untuk mewujudkan kesuksesan bersama.{" "}
              </p>
              <p className="slogan">-Not Your Ordinary Martabak-</p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div id="secondsection" className="py-5">
        <div className="container midsectioncontainer">
          <h1 className="header">
            <span>Menu</span>
          </h1>
          <h1 className="menu-header">Martabak Jepang Jony</h1>
          <div className="row pt-4 my-4 mx-0 justify-content-between">
            <Menucard
              imgsrc={martabakmenu[0].imgsrc}
              nama={martabakmenu[0].nama}
              rasa={martabakmenu[0].rasa}
            />
            <Menucard
              imgsrc={martabakmenu[1].imgsrc}
              nama={martabakmenu[1].nama}
              rasa={martabakmenu[1].rasa}
            />
          </div>
          <div className="row my-4 mx-0 justify-content-between">
            <Menucard
              imgsrc={martabakmenu[2].imgsrc}
              nama={martabakmenu[2].nama}
              rasa={martabakmenu[2].rasa}
            />
            <Menucard
              imgsrc={martabakmenu[3].imgsrc}
              nama={martabakmenu[3].nama}
              rasa={martabakmenu[3].rasa}
            />
          </div>
          <div className="row my-4 mx-0 justify-content-center">
            <Menucard
              imgsrc={martabakmenu[4].imgsrc}
              nama={martabakmenu[4].nama}
              rasa={martabakmenu[4].rasa}
            />
          </div>
          <h1 className="menu-header">Nasi Jepang Jony</h1>
          <div className="row pt-4 my-4 mx-0 justify-content-center">
            <Menucard
              imgsrc={nasimenu[0].imgsrc}
              nama={nasimenu[0].nama}
              type={nasimenu[0].type}
            />
            <Menucard
              imgsrc={nasimenu[1].imgsrc}
              nama={nasimenu[1].nama}
              type={nasimenu[1].type}
            />
          </div>
          <h1 className="menu-header">Great Thai Tea</h1>
          <div className="row pt-4 my-4 mx-0 justify-content-between">
            <Menucard
              imgsrc={minumanmenu[0].imgsrc}
              nama={minumanmenu[0].nama}
              type={minumanmenu[0].type}
            />
            <Menucard
              imgsrc={minumanmenu[1].imgsrc}
              nama={minumanmenu[1].nama}
              type={minumanmenu[1].type}
            />
            <Menucard
              imgsrc={minumanmenu[2].imgsrc}
              nama={minumanmenu[2].nama}
              type={minumanmenu[2].type}
              isedge={true}
            />
          </div>
          <div className="row pt-4 my-4 mx-0 justify-content-between">
            <Menucard
              imgsrc={minumanmenu[2].imgsrc}
              nama={minumanmenu[2].nama}
              type={minumanmenu[2].type}
              iscenter={true}
            />
            <Menucard
              imgsrc={minumanmenu[3].imgsrc}
              nama={minumanmenu[3].nama}
              type={minumanmenu[3].type}
              iscenter={true}
            />
          </div>
          <div className="row pt-4 my-4 mx-0 justify-content-between">
            <Menucard
              imgsrc={minumanmenu[3].imgsrc}
              nama={minumanmenu[3].nama}
              type={minumanmenu[3].type}
              isedge={true}
            />
            <Menucard
              imgsrc={minumanmenu[4].imgsrc}
              nama={minumanmenu[4].nama}
              type={minumanmenu[4].type}
            />
            <Menucard
              imgsrc={minumanmenu[5].imgsrc}
              nama={minumanmenu[5].nama}
              type={minumanmenu[5].type}
            />
          </div>
        </div>
      </div>
      <div id="thirdsection" className="py-5">
        <div className="container midsectioncontainer">
          <div className="row">
            <div className="col pt-5 d-flex flex-column justify-content-end order-5 order-lg-0">
              <img src={brandimg} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-lg-5 wrapper px-lg-0">
              <h1 className="header">
                <span>Kemitraan</span>
              </h1>
              <p className="slogan">Pertama di Indonesia!</p>
              <p className="slogan mb-1">3 BRAND DALAM 1 KEMITRAAN</p>
              <p className="text">
                Martabak Jepang Jony menghadirkan kemitraan dengan sistem yang
                sustainable dan profitable dengan cara menghadirkan 3 Brand
                dalam 1 Paket Kemitraan, terdiri dari Martabak Jepang Jony, Nasi
                Jepang Jony, dan Great Thai Tea.
              </p>
              <p className="text">
                Dengan konsep 3 Brand dalam 1 outlet, Martabak Jepang Jony
                terbukti memiliki berbagai macam sumber pendapatan yang baik,
                dikarenakan tidak hanya mengandalkan 1 produk saja, namun
                berbagai produk dengan banyak varian.{" "}
              </p>
            </div>
          </div>
          <div className="myform mt-0 p-2 p-lg-5">
            <h2 className="formheader mb-0 px-4">Bergabung dengan kami?</h2>
            <p className="formhelp px-4">
              Isi data diri, lalu dapatkan Proposal Kemitraan anda!
            </p>
            <form action="" className="formproposal" id="proposal">
              <div className="row px-4">
                <div className="col-12 col-lg-6">
                  <input
                    placeholder="Nama Lengkap"
                    className="py-3 input-item"
                    name="namalengkap"
                    type="text"
                  />
                  <input
                    placeholder="Usia (tahun)"
                    className="py-3 input-item"
                    name="usia"
                    type="text"
                    min="0"
                  />
                  <input
                    placeholder="Pekerjaan"
                    className="py-3 input-item"
                    name="pekerjaan"
                    type="text"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <input
                    placeholder="Alamat Rumah"
                    className="input-item py-3"
                    name="alamat"
                    type="text"
                  />
                  <input
                    placeholder="Lokasi Outlet Yang Diinginkan"
                    className="py-3 input-item"
                    name="lokasi"
                    type="text"
                  />
                  {/* <input placeholder="Pengalaman Bisnis/Franchise" className='py-3 input-item' name="pengalaman" type="text"/> */}
                </div>
                <input
                  className="input-submit mx-auto px-4"
                  type="submit"
                  value="Kirim dan Download"
                  id="form-submitter"
                  onClick={submitFunc}
                />
                <a
                  id="dl-link"
                  className="d-none"
                  href="/Proposal-Kemitraan-Makjon-(2-Maret).pdf"
                >
                  Download
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="fourthsection" className="py-5">
        <div className="container midsectioncontainer">
          <h1 className="header">
            <span>Outlets</span>
          </h1>
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="photo-wrapper">
                <img src={outlet1} className="img-fluid" alt="outlet" />
              </div>
            </div>
            <div className="col-12 col-lg-5 mt-3 mt-lg-0">
              <div className="photo-wrapper">
                <img src={outlet2} className="img-fluid" alt="outlet" />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-5">
              <div className="photo-wrapper">
                <img src={outlet3} className="img-fluid" alt="outlet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
