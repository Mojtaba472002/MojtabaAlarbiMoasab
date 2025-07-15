document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("user-name");
    const storedName = localStorage.getItem("username");

    if (storedName) {
        nameElement.textContent = storedName;
        localStorage.removeItem("username"); // Show once
    } else {
        nameElement.textContent = "مجتبى";
    }
});

// Render filter sidebar
const filterSidebar = document.getElementById("filterSidebar");
filterSidebar.innerHTML = `
            <h3>فلترة</h3>
            <div class="filter-group">
                <span class="filter-title">الوظيفة</span>
                <ul class="filter-list">
                    <li><input type="radio" name="job" value="all" checked> الكل</li>
                    <li><input type="radio" name="job" value="photographer"> مصور</li>
                    <li><input type="radio" name="job" value="designer"> جرافيك ديزاينر</li>
                    <li><input type="radio" name="job" value="web"> ويب ديزاينر</li>
                    <li><input type="radio" name="job" value="programmer"> مبرمج</li>
                    <li><input type="radio" name="job" value="uiux"> مصمم واجهات (UI/UX)</li>
                    <li><input type="radio" name="job" value="writer"> كاتب</li>
                    <li><input type="radio" name="job" value="business"> اعمال</li>
                </ul>
            </div>
            <div class="filter-group">
                <span class="filter-title">المرتبات او القيمة</span>
                <ul class="filter-list">
                    <li><input type="radio" name="salary" value="all" checked> الكل</li>
                    <li><input type="radio" name="salary" value="lt3000"> اقل من 3000</li>
                    <li><input type="radio" name="salary" value="3000"> 3000+</li>
                    <li><input type="radio" name="salary" value="4000"> 4000+</li>
                    <li><input type="radio" name="salary" value="5000"> 5000+</li>
                    <li><input type="radio" name="salary" value="6000"> 6000+</li>
                </ul>
            </div>
            <div class="filter-group">
                <span class="filter-title">نوع العمل</span>
                <ul class="filter-list">
                    <li><input type="checkbox" name="worktype" value="freelancer" checked> فريلانسر</li>
                    <li><input type="checkbox" name="worktype" value="fulltime" checked> دوام</li>
                </ul>
            </div>
        `;
const pagination = document.getElementById("pagination");
const totalPages = 5;
let pageBtns = "";
for (let i = 1; i <= totalPages; i++) {
    pageBtns += `<button class="page-btn${i === 1 ? " active" : ""}">${i}</button>`;
}
pagination.innerHTML = pageBtns;

const jobsList = document.querySelector(".jobs-list");
const allJobs = [
    // جرافيك ديزاينر
    {
        user: "مجتبى سالم",
        title: "جرافيك ديزاينر",
        salary: "السعر: 2000 - 1500",
        date: "وقت التسليم: يوم",
        location: "الموقع: طرابلس",
        type: "فريلانسر",
        desc: "أنا مجتبى، مصمم جرافيك بخبرة، أعمل على خلق تصاميم إبداعية تلبي احتياجات العملاء. أعمل على كل ما يخص التصميم من البداية حتى النهاية. أرحب بالتحديات الجديدة وأسعى دائماً لتقديم أفضل النتائج.",
        key: "designer"
    },
    {
        user: "والتر وايت",
        title: "جرافيك ديزاينر",
        salary: "السعر: 2500 - 1800",
        date: "وقت التسليم: يومان",
        location: "الموقع: بنغازي",
        type: "دوام",
        desc: " SAY MY NAME ",
        key: "designer"
    },
    {
        user: "جون سنو",
        title: "جرافيك ديزاينر",
        salary: "السعر: 2200 - 1700",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: كينغ لاندينغ",
        type: "فريلانسر",
        desc: "كينج اوف نورث ",
        key: "designer"
    },
    {
        user:"زعيم حارة الضبع",
        title: "جرافيك ديزاينر",
        salary: "السعر: 2100 - 1600",
        date: "وقت التسليم: يوم",
        location: "الموقع: سبها",
        type: "دوام",
        desc: "من هون للخميس الجاية رح اسلملكم من اتل ابو سمير الحمصاني",
        key: "designer"
    },
    // مصور
    {
        user: "مصعب الككلي",
        title: "مصور / منتج",
        salary: "السعر: 4000 - 1500",
        date: "وقت التسليم: يوم",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "مرحباً، أنا مصعب، مصور ومنتج فيديوهات. أعمل على إنتاج محتوى احترافي للشركات والأفراد. أؤمن بأن العمل الجماعي أساس النجاح.",
        key: "photographer"
    },
    {
        user: "جوستاف",
        title: "مصور",
        salary: "السعر: 3500 - 2000",
        date: "وقت التسليم: يومان",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "For those Who Come after",
        key: "photographer"
    },
    {
        user: "ميسي",
        title: "مصور",
        salary: "السعر: 3000 - 1800",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "كاميرا وو كابيسا وو كابسيا وو كاميرا وو",
        key: "photographer"
    },
    {
        user: "منى علي",
        title: "مصور",
        salary: "السعر: 3200 - 1700",
        date: "وقت التسليم: يوم",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "أعمل على تصوير البورتريه والمناظر الطبيعية.",
        key: "photographer"
    },
    // ويب ديزاينر
    {
        user: "خالد عادل",
        title: "ويب ديزاينر",
        salary: "السعر: 3500 - 2000",
        date: "وقت التسليم: 4 أيام",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "متخصص في تصميم واجهات المواقع الإلكترونية.",
        key: "web"
    },
    {
        user: "سعاد محمد",
        title: "ويب ديزاينر",
        salary: "السعر: 3700 - 2100",
        date: "وقت التسليم: 5 أيام",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "خبرة في تصميم مواقع الشركات والمتاجر الإلكترونية.",
        key: "web"
    },
    {
        user: "عبد الرحمن صالح",
        title: "ويب ديزاينر",
        salary: "السعر: 3600 - 2200",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "تصميم مواقع متجاوبة وسريعة.",
        key: "web"
    },
    {
        user: "فاطمة الزهراء",
        title: "ويب ديزاينر",
        salary: "السعر: 3400 - 1900",
        date: "وقت التسليم: يومان",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "تصميم مواقع شخصية ومدونات.",
        key: "web"
    },
    // مبرمج
    {
        user: "محمد علي",
        title: "مبرمج",
        salary: "السعر: 4000 - 2500",
        date: "وقت التسليم: 6 أيام",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "مبرمج تطبيقات ويب وموبايل.",
        key: "programmer"
    },
    {
        user: "سامي يوسف",
        title: "مبرمج",
        salary: "السعر: 4200 - 2600",
        date: "وقت التسليم: 7 أيام",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "خبرة في تطوير الأنظمة البرمجية.",
        key: "programmer"
    },
    {
        user: "أسماء عبد الله",
        title: "مبرمج",
        salary: "السعر: 4100 - 2700",
        date: "وقت التسليم: 5 أيام",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "تطوير مواقع وتطبيقات حسب الطلب.",
        key: "programmer"
    },
    {
        user: "حسن محمد",
        title: "مبرمج",
        salary: "السعر: 4300 - 2800",
        date: "وقت التسليم: 4 أيام",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "مبرمج محترف في بايثون وجافاسكريبت.",
        key: "programmer"
    },
    // مصمم واجهات
    {
        user: "سلمى أحمد",
        title: "مصمم واجهات (UI/UX)",
        salary: "السعر: 3000 - 1800",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "خبرة في تصميم واجهات المستخدم وتجربة المستخدم.",
        key: "uiux"
    },
    {
        user: "رامي يوسف",
        title: "مصمم واجهات (UI/UX)",
        salary: "السعر: 3200 - 1900",
        date: "وقت التسليم: 4 أيام",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "تصميم تطبيقات موبايل متقدمة.",
        key: "uiux"
    },
    {
        user: "هالة محمد",
        title: "مصمم واجهات (UI/UX)",
        salary: "السعر: 3100 - 2000",
        date: "وقت التسليم: 2 أيام",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "تصميم لوحات تحكم متجاوبة.",
        key: "uiux"
    },
    {
        user: "مروان علي",
        title: "مصمم واجهات (UI/UX)",
        salary: "السعر: 3300 - 2100",
        date: "وقت التسليم: يوم",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "تصميم واجهات لمواقع التجارة الإلكترونية.",
        key: "uiux"
    },
    // كاتب
    {
        user: "نور الدين سالم",
        title: "كاتب",
        salary: "السعر: 1800 - 1200",
        date: "وقت التسليم: يومان",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "كاتب محتوى تسويقي وإبداعي.",
        key: "writer"
    },
    {
        user: "سارة عبد الله",
        title: "كاتب",
        salary: "السعر: 2000 - 1300",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "كتابة مقالات وتقارير احترافية.",
        key: "writer"
    },
    {
        user: "علي محمد",
        title: "كاتب",
        salary: "السعر: 1900 - 1400",
        date: "وقت التسليم: يوم",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "كتابة نصوص إعلانية وإبداعية.",
        key: "writer"
    },
    {
        user: "هدى أحمد",
        title: "كاتب",
        salary: "السعر: 1700 - 1100",
        date: "وقت التسليم: 2 أيام",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "كتابة محتوى لمواقع الإنترنت.",
        key: "writer"
    },
    // اعمال
    {
        user: "مروان سالم",
        title: "اعمال",
        salary: "السعر: 2500 - 1500",
        date: "وقت التسليم: 3 أيام",
        location: "الموقع: طرابلس",
        type: "دوام",
        desc: "إدارة مشاريع صغيرة ومتوسطة.",
        key: "business"
    },
    {
        user: "سامي علي",
        title: "اعمال",
        salary: "السعر: 2700 - 1600",
        date: "وقت التسليم: 4 أيام",
        location: "الموقع: بنغازي",
        type: "فريلانسر",
        desc: "تقديم استشارات إدارية ومالية.",
        key: "business"
    },
    {
        user: "سلمى يوسف",
        title: "اعمال",
        salary: "السعر: 2600 - 1700",
        date: "وقت التسليم: يومان",
        location: "الموقع: مصراتة",
        type: "دوام",
        desc: "تنظيم فعاليات ومؤتمرات.",
        key: "business"
    },
    {
        user: "خالد محمد",
        title: "اعمال",
        salary: "السعر: 2800 - 1800",
        date: "وقت التسليم: يوم",
        location: "الموقع: سبها",
        type: "فريلانسر",
        desc: "تقديم خدمات تسويقية للشركات.",
        key: "business"
    }
];
let selectedJobType = "all";
let selectedSalary = "all";
let selectedWorkTypes = ["freelancer", "fulltime"];
const salaryRanges = {
    "all": [0, Infinity],
    "lt3000": [0, 3000],
    "3000": [3000, 3999],
    "4000": [4000, 4999],
    "5000": [5000, 5999],
    "6000": [6000, Infinity]
};
function parseSalary(salaryStr) {
    const match = salaryStr.match(/([0-9]+)\s*-\s*([0-9]+)/);
    if (match) {
        return parseInt(match[1], 10);
    }
    return 0;
}
function getWorkType(typeStr) {
    if (typeStr.includes("فريلانسر")) return "freelancer";
    if (typeStr.includes("دوام")) return "fulltime";
    return "";
}


// Function to get query params
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}



function renderJobs(filterKey, salaryKey, workTypes) {
    jobsList.innerHTML = "";
    const [minSalary, maxSalary] = salaryRanges[salaryKey || "all"] || [0, Infinity];
    let count = 0;
    allJobs.forEach(job => {
        const jobSalary = parseSalary(job.salary);
        const jobTypeMatch = (filterKey === "all" || !filterKey) ? true : job.key === filterKey;
        const salaryMatch = (salaryKey === "all" || !salaryKey) ? true : (jobSalary >= minSalary && jobSalary < maxSalary);
        const workType = getWorkType(job.type);
        const workTypeMatch = (workTypes.length === 0) ? true : workTypes.includes(workType);
     if (jobTypeMatch && salaryMatch && workTypeMatch) {
    count++;

    let jobCardHTML = "";
    const isActiveUser = job.user === "مجتبى سالم" || job.user === "مصعب الككلي";

    // Determine profile link if it's an active user
    let profileLink = "#";
    if (job.user === "مجتبى سالم") {
        profileLink = "MojtabaGallary_Page.html";
    } else if (job.user === "مصعب الككلي") {
        profileLink = "MosabGallary_Page.html";
    }

    // User image logic
    let userImgHTML = "";
    if (job.user === "مجتبى سالم") {
        userImgHTML = '<img src="/My Code/Logos/Mojtaba_Photo.png" alt="مجتبى سالم" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    } else if (job.user === "مصعب الككلي") {
        userImgHTML = '<img src="/My Code/Logos/Mosab_Photo.png" alt="مصعب الككلي" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    } else if (job.user === "والتر وايت") {
        userImgHTML = '<img src="/My Code/Logos/walter.jpg" alt="والتر وايت" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    } else if (job.user === "جون سنو") {
        userImgHTML = '<img src="/My Code/Logos/250116GOTJonSnow_SYK_250116-1-920x610-e1527406931583.jpg" alt="جون سنو" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    }
    else if (job.user === "زعيم حارة الضبع") {
        userImgHTML = '<img src="/My Code/Logos/MV5BZmJiNDQ3YzktM2EwNy00NzBmLWFiZDMtMDA3OTgwOGY3ODkxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="جون سنو" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    }
    else if (job.user === "جوستاف") {
        userImgHTML = '<img src="/My Code/Logos/Clair-Obscur-Expedition-33_2024_10-16-24_008.jpg" alt="جون سنو" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    }
    else if (job.user === "ميسي") {
        userImgHTML = '<img src="/My Code/Logos/maxresdefault.jpg" alt="جون سنو" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />';
    }
    if (isActiveUser) {
        jobCardHTML += `
            <a href="${profileLink}" class="job-user-link" style="text-decoration: none; color: inherit;">
                <div class="job-card">
                    <div class="job-card-header">
                        <div class="job-user">
                            <span class="user-img">${userImgHTML}</span>
                            <span class="user-name">${job.user}</span>
                        </div>
                        <span class="job-title">${job.title}</span>
                    </div>
                    <div class="job-card-details">
                        <span class="job-salary">${job.salary}</span>
                        <span class="job-date">${job.date}</span>
                        <span class="job-location">${job.location}</span>
                        <span class="job-type">${job.type}</span>
                    </div>
                    <div class="job-card-desc">
                        ${job.desc}
                    </div>
                </div>
            </a>
        `;
    } else {
        // Static version without <a>
        jobCardHTML += `
            <div class="job-card">
                <div class="job-card-header">
                    <div class="job-user">
                        <span class="user-img">${userImgHTML}</span>
                        <span class="user-name">${job.user}</span>
                    </div>
                    <span class="job-title">${job.title}</span>
                </div>
                <div class="job-card-details">
                    <span class="job-salary">${job.salary}</span>
                    <span class="job-date">${job.date}</span>
                    <span class="job-location">${job.location}</span>
                    <span class="job-type">${job.type}</span>
                </div>
                <div class="job-card-desc">
                    ${job.desc}
                </div>
            </div>
        `;
    }

    jobsList.innerHTML += jobCardHTML;
}


    });
    // Update jobs count
    document.querySelector(".jobs-count").textContent = `${count} Jobs`;
}

// Get specialty from query string
const specialtyFromURL = getQueryParam('specialty') || 'all';

// Set selectedJobType from URL
selectedJobType = specialtyFromURL;


// After initial render
const jobRadio = filterSidebar.querySelector(`input[name="job"][value="${selectedJobType}"]`);
if (jobRadio) {
    jobRadio.checked = true;
}



// Initial render using URL param (if provided)
renderJobs(selectedJobType, selectedSalary, selectedWorkTypes);


filterSidebar.querySelectorAll('input[name="job"]').forEach(radio => {
    radio.addEventListener("change", function () {
        selectedJobType = this.value;
        renderJobs(selectedJobType, selectedSalary, selectedWorkTypes);
    });
});

filterSidebar.querySelectorAll('input[name="salary"]').forEach(radio => {
    radio.addEventListener("change", function () {
        selectedSalary = this.value;
        renderJobs(selectedJobType, selectedSalary, selectedWorkTypes);
    });
});

filterSidebar.querySelectorAll('input[name="worktype"]').forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        selectedWorkTypes = Array.from(filterSidebar.querySelectorAll('input[name="worktype"]:checked')).map(cb => cb.value);
        renderJobs(selectedJobType, selectedSalary, selectedWorkTypes);
    });
});


