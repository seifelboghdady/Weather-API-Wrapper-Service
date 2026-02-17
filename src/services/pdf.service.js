import PDFDocument from "pdfkit";
import path from "path";


export const generateWeatherPDF = (weatherData, res) => {
    

  const doc = new PDFDocument();


  // important
  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",
    //open the pdf in the browser instead of downloading it
    `inline; filename=${weatherData.address}.pdf`
  );


  doc.pipe(res);


  // add path the same cd .. > cd ..>frontend > assets > weather.png
  const logoPath = path.join(process.cwd(), "frontend", "assets", "weather.png");
  doc.image(logoPath, 50, 40, {
    width: 40,
    height: 40,
  });


  // Title
  doc
    .fontSize(20)
    .text("Weather Report", { align: "center" });


  doc.moveDown();


  doc.fontSize(14);

  doc.text(`City: ${weatherData.address}`);

  doc.text(
    `Temperature: ${weatherData.currentConditions.temp} °C`
  );

  doc.text(
    `Humidity: ${weatherData.currentConditions.humidity}`
  );

  doc.text(
    `Condition: ${weatherData.currentConditions.conditions}`
  );

  doc.text(`Source: ${weatherData.source}`);

  doc
  .fillColor("red")
  .text(`Response Time: ${weatherData.responseTime} ms`);


  doc.end();

};
