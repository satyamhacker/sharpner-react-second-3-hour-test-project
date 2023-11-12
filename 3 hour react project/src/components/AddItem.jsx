import React, { useState } from "react";

function AddItem() {
  const [inputValues, setInputValues] = useState([
    {
      ShoeName: "",
      Description: "",
      Price: "",
      Lsize: "",
      Msize: "",
      Ssize: "",
    },
  ]);

  const [showItem, setshowItem] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = {
        ...newInputValues[index],
        [name]: value,
      };
      return newInputValues;
    });
  };

  const AddProductButton = () => {
    setshowItem(true);
  };

  const AddToCartButton = (item, index) => {
    console.log("test", item, index);
    console.log("second test");
  };

  return (
    <>
      {inputValues.map((item, index) => (
        <div key={index}>
          ShoeName:
          <input
            type="text"
            name="ShoeName"
            value={item.ShoeName}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
          Description:
          <input
            type="text"
            name="Description"
            value={item.Description}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
          Price:
          <input
            type="number"
            name="Price"
            value={item.Price}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
          L:
          <input
            type="number"
            name="Lsize"
            value={item.Lsize}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
          M:
          <input
            type="number"
            name="Msize"
            value={item.Msize}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
          S:
          <input
            type="number"
            name="Ssize"
            value={item.Ssize}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="Type something..."
          />
        </div>
      ))}

      <button type="submit" onClick={AddProductButton}>
        Add Product
      </button>

      <div>
        {showItem == true ? (
          inputValues.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <p>
                <strong>ShoeName:</strong> {item.ShoeName}
                <strong>Description:</strong> {item.Description}
                <strong>Price:</strong> {item.Price}
                <strong>Lsize:</strong>{" "}
                <button onClick={() => AddToCartButton(item, index)}>
                  Buy Large {item.Lsize}{" "}
                </button>
                <strong>Msize:</strong>{" "}
                <button onClick={() => AddToCartButton(item, index)}>
                  Buy Medium {item.Msize}{" "}
                </button>
                <strong>Ssize:</strong>{" "}
                <button onClick={() => AddToCartButton(item, index)}>
                  Buy Small {item.Ssize}{" "}
                </button>
              </p>
            </div>
          ))
        ) : (
          <p>No items</p>
        )}
      </div>
    </>
  );
}

export default AddItem;
