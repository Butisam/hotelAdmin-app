import { db, storage } from "../config/firebase";
import './addHotel.css';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";




export default function AddHotel() {

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        location: "",
        description: "",
        image: "",

    });

    const [property, setPropertyType] = useState("")
    console.log(property)

    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [map, setMap] = useState("");

  
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };


    const handleUpload = () => {



        const storageRef = ref(
            storage,
            `/images/${Date.now()}${formData.image.name}`
        );
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
        uploadImage.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    name: "",
                    price: "",
                    location: "",
                    description: "",
                    image: "",
                    map:"",
                });
                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const collectionRef = collection(db, "hotels");
                    addDoc(collectionRef, {
                        name: name,
                        description: description,
                        location: location,
                        price: price,
                        property: property,
                        image: url,
                        map: map,


                    })
                        .then(() => {
                            alert("Hotel added successfully", { type: "success" });

                        })
                        .catch((err) => {
                            alert("Error adding hotel", { type: "error" });
                        });
                });
            }
        );
    };







    return (
        <div className="addparent">
            <div className='card'>
                <h1 className="label">Add Hotel</h1>
                <div className="form">

                    <input className="inputs" required placeholder="Hotel name" onChange={(e) => setName(e.target.value)} /><br></br>
                    <input className="inputs" required placeholder="Location" onChange={(e) => setLocation(e.target.value)} /><br></br>
                    <input className="inputs" required placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br></br>
                    {/* <iframe className="inputs" required placeholder="map" onChange={(e)=> setMap(e.target.value)}/><br></br> */}
                    <input className="inputs" placeholder="Link from Google maps..." onChange={(e) => setMap(e.target.value)}></input>{" "}

                    <div className="selectDiv">
                        <label className="hotelName">Select propterty type </label>
                        <select onChange={(e) => setPropertyType(e.target.value)}>
                            <option value="Apartment">Apartment</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Resort">Resort</option>
                        </select><br></br>
                    </div>
                    <div className="hotelDesc">
                        <label className="hotelName" htmlFor="">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>
                    <div className="selectDiv">
                        <label className="hotelName" htmlFor="file">Choose image</label>
                        <input className="inputs"
                            type="file"
                            id="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e)} />
                    </div>
                    <button className="button2" onClick={handleUpload}>Upload</button>
                </div>
            </div>

        </div>
    )

}