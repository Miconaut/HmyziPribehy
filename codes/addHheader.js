const myHheader = document.getElementById("hheader");

myHheader.innerHTML = `
<section class="navigationBox">
    <section class="webName">
        <div class="logo"><img src="src/butterfly.svg" alt="Motýl logo"></div>
        <div class="name"><a href="index.html">Hmyzí příběhy</a></div>
    </section>
    <section class="nav">
        <ul>
            <li><a href="index.html">Domů</a></li>
            <li><a href="pages/insect.html">Hmyz</a></li>
            <li><a href="pages/adventures.html">Příhody</a></li>
            <li><a href="pages/aboutUs.html">O nás</a></li>
        </ul>
        <div class="menuBars">
            <input type="checkbox">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </section>
</section>
`;