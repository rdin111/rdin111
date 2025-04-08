function addCourse() {
    const list = document.getElementById("course-list");
    const entry = document.createElement("div");
    entry.className = "course-entry";
  
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Course (e.g., ITIS 3135 - Web Dev: Reason)";
    input.required = true;
  
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Delete";
    removeBtn.onclick = () => entry.remove();
  
    entry.appendChild(input);
    entry.appendChild(removeBtn);
    list.appendChild(entry);
  }
  
  function resetForm() {
    document.getElementById("introForm").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("course-list").innerHTML = "";
  }
  
  document.getElementById("introForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const mascot = document.getElementById("mascot").value.trim();
    const caption = document.getElementById("caption").value.trim();
    const personal = document.getElementById("personal").value.trim();
    const professional = document.getElementById("professional").value.trim();
    const academic = document.getElementById("academic").value.trim();
    const programming = document.getElementById("programming").value.trim();
    const platform = document.getElementById("platform").value.trim();
    const funny = document.getElementById("funny").value.trim();
    const anythingElse = document.getElementById("else").value.trim();
  
    const courseInputs = document.querySelectorAll(".course-entry input");
    const courses = Array.from(courseInputs).map(input => input.value.trim()).filter(Boolean);
  
    let output = `
      <p><strong>I understand that what is on this page is not password protected and I will not put anything here that I don’t want publicly available.</strong></p>
      <h1 style="text-align:center"><strong>${name}</strong> — ${mascot}</h1>
      <p style="text-align:center"><em>${caption}</em></p>
      <p><strong>Personal Background:</strong> ${personal}</p>
      <p><strong>Professional Background:</strong> ${professional}</p>
      <p><strong>Academic Background:</strong> ${academic}</p>
      <p><strong>Programming/ Software Background:</strong> ${programming}</p>
      <p><strong>Primary Computer Platform:</strong> ${platform}</p>
      <p><strong>Courses:</strong></p><ul>
    `;
  
    courses.forEach(course => {
      output += `<li>${course}</li>`;
    });
  
    output += `</ul>`;
  
    if (funny) output += `<p><strong>Funny thing to remember me by:</strong> ${funny}</p>`;
    if (anythingElse) output += `<p><strong>Also like to share:</strong> ${anythingElse}</p>`;
  
    output += `<br><a href="#" onclick="resetForm()">Start Over</a>`;
  
    document.getElementById("introForm").style.display = "none";
    const result = document.getElementById("result");
    result.innerHTML = output;
    result.style.display = "block";
  });
  