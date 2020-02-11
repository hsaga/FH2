
  const age = document.forms["frm1"]["age"].value;
  const ldl = document.forms["frm1"]["ldl"].value;
  const hdl = document.forms["frm1"]["hdl"].value;
  const tg = document.forms["frm1"]["tg"].value;

  document.write(age);


(async () => {
  const model = await tf.loadLayersModel('https://hsaga.github.io/FH/tfjs_model/model.json');

  console.log(model);

  let prediction =  model.predict(tf.tensor2d([[age, ldl, hdl]]));
  prediction.print();

})();



  

  