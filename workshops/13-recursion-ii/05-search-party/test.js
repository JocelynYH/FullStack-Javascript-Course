var arr = ["first-year-leadership-experience-marker", "uva-flute-ensemble-marker", "lighting-of-the-lawn-marker", "uva-student-council-elected-representative-marketing-committee-marker", "uva-college-council-marker", "founder-of-the-unofficial-guide-to-uva-marker", "founder-cavalier-symphony-orchestra-marker", "graphic-design-intern-at-modus-create-marker", "second-year-council-marker", "uva-student-council-arts-committee-chair-marker", "principal-flute-marker", "principal-conductor-marker", "uva-vice-provost-for-the-arts-office-marker", "arts-mentor-volunteer-marker", "music-director-marker", "wireframe-web-design-student-marker", "launch-academy-for-web-ui-design-development-marker", "front-end-web-development-intern-foodio-inc-marker", "freelance-web-developer-graphic-designer-marker", "charlottesville-symphony-marker", "web-design-program-lead-and-instructor-marker", "uva-wind-ensemble-marker", "th-jazz-ensemble-marker", "databases-teaching-assistant-marker"];

function filterUVA(arr) {
    var UVAelems = arr.filter(markername => markername.includes("uva") );
    console.log(UVAelems);
}

filterUVA(arr);