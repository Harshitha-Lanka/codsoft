

  document.getElementById('downloadCv').addEventListener('click', function() {
      var a = document.createElement('a');
      a.href = 'resume.pdf.pdf';
      a.download = 'resume.pdf.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  });
