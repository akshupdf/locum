import React from 'react';
import html2pdf from 'html2pdf.js';


const GeneratePDFv2 = async (data) => {

// console.log(data)
  const response = await fetch('./resume-template.html');
  let template = await response.text();

  template = template.replace('{{first_name}}', data.first_name || '')
                     .replace('{{last_name}}', data.last_name || '')
                     .replace('{{email_id}}', data.email_id || '')
                     .replace('{{mobile_number}}', data.mobile_number || '')
                     .replace('{{location}}', data.location || '')
                     .replace('{{medical_id}}', data.medical_id || '')
                     .replace('{{about}}', data.about || '');


  if (data.availability) {
    const availabilityHTML = data.availability.map(slot => `<div>- ${slot}</div>`).join('');
    template = template.replace('{{availability}}', availabilityHTML);
  }

  if (data.specialties) {
    const specialtiesHTML = data.specialties.map(specialty => `<div>- ${specialty}</div>`).join('');
    template = template.replace('{{specialties}}', specialtiesHTML);
  }

  const element = document.createElement('div');
  element.innerHTML = template;

  html2pdf()
    .from(element)
    .set({
      margin: 1,
      filename: 'custom_resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait' }
    })
    .save();
};

export default GeneratePDFv2;
