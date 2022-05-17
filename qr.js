qrData = document.getElementById('dataInput');
console.log(qrData);
qrLastname = document.getElementById('lastname');
qrdob = document.getElementById('dob');
qrnat = document.getElementById('nat');
qrblank = document.getElementById('blank');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrlastname = () => {
  newQrData = qrData.value+qrLastname.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdob = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrnat = () => {
  newQrData = qrData.value+qrLastname.value+qrdob.value+qrnat.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrblank = () => {
  newQrData = "Brand Name: "+qrData.value+"   \n"+"Model: "+qrLastname.value+"   \n"+"Description: "+qrdob.value+"   \n"+"Manufacturer Name: "+qrnat.value+"   \n"+"Manufacturer Location: "+qrblank.value;
  qrCode.update({
    data: newQrData
  });
};


const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));