/* ==================================================
   STEP 02 — GALAXY PARTICLE SYSTEM
   CH-NIMRA BIRTHDAY UNIVERSE
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       JAVASCRIPT CONNECTION
       ================================================ */

    const jsStatus = document.getElementById("js-status");

    if (jsStatus) {
        jsStatus.textContent = "✓";
    }


    /* ================================================
       FLOATING PARTICLES
       ================================================ */

    const particleContainer =
        document.getElementById("particles");

    if (!particleContainer) {
        console.warn("Particle container not found.");
        return;
    }


    const particleCount = 45;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");


        /* Random position */

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;


        /* Random animation */

        const duration =
            4 + Math.random() * 7;

        const moveX =
            (Math.random() * 100) - 50;

        const moveY =
            (Math.random() * 100) - 50;

        const opacity =
            0.25 + Math.random() * 0.65;


        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );

        particle.style.setProperty(
            "--move-x",
            `${moveX}px`
        );

        particle.style.setProperty(
            "--move-y",
            `${moveY}px`
        );

        particle.style.setProperty(
            "--opacity",
            opacity
        );


        /* Slightly different particle sizes */

        const size =
            1 + Math.random() * 2.5;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particleContainer.appendChild(
            particle
        );
    }


    /* ================================================
       CONSOLE TEST
       ================================================ */

    console.log(
        "CH-NIMRA Birthday Universe — Step 02 Galaxy loaded."
    );

});
/* =========================================
   STEP 03 — BIRTHDAY ACCESS SYSTEM
   CH-NIMRA
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const birthdayInput =
        document.getElementById("birthday-input");

    const enterButton =
        document.getElementById("birthday-enter-button");

    const accessMessage =
        document.getElementById("birthday-access-message");

    const birthdayLock =
        document.getElementById("birthday-lock");

    const lockCard =
        document.querySelector(".birthday-lock-card");


    if (
        !birthdayInput ||
        !enterButton ||
        !accessMessage ||
        !birthdayLock ||
        !lockCard
    ) {
        return;
    }


    function formatBirthday(value) {

        let numbers =
            value.replace(/\D/g, "").slice(0, 8);

        if (numbers.length > 4) {

            numbers =
                numbers.slice(0, 2) +
                " - " +
                numbers.slice(2, 4) +
                " - " +
                numbers.slice(4);

        } else if (numbers.length > 2) {

            numbers =
                numbers.slice(0, 2) +
                " - " +
                numbers.slice(2);

        }

        birthdayInput.value = numbers;
    }


    birthdayInput.addEventListener(
        "input",
        () => {
            formatBirthday(
                birthdayInput.value
            );
        }
    );


    function checkBirthday() {

        const entered =
            birthdayInput.value
                .replace(/\D/g, "");


        accessMessage.className =
            "birthday-access-message";


        if (entered === "18102003") {

            accessMessage.textContent =
                "ACCESS GRANTED";

            accessMessage.classList.add(
                "birthday-granted"
            );


            enterButton.disabled = true;

            birthdayInput.disabled = true;


            setTimeout(() => {

                birthdayLock.classList.add(
                    "birthday-lock-hidden"
                );

            }, 1200);


        } else {

            accessMessage.textContent =
                "ACCESS DENIED — TRY AGAIN";

            accessMessage.classList.add(
                "birthday-denied"
            );


            lockCard.classList.remove(
                "birthday-shake"
            );


            void lockCard.offsetWidth;


            lockCard.classList.add(
                "birthday-shake"
            );


            birthdayInput.value = "";

            birthdayInput.focus();
        }
    }


    enterButton.addEventListener(
        "click",
        checkBirthday
    );


    birthdayInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                checkBirthday();
            }

        }
    );

});
/* =========================================
   STEP 04 — CINEMATIC ACCESS INTRO
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const birthdayLock =
        document.getElementById("birthday-lock");

    const cinematicIntro =
        document.getElementById("cinematic-intro");

    if (!birthdayLock || !cinematicIntro) {
        return;
    }


    const observer =
        new MutationObserver(() => {

            if (
                birthdayLock.classList.contains(
                    "birthday-lock-hidden"
                )
            ) {

                cinematicIntro.classList.add(
                    "active"
                );


                setTimeout(() => {

                    cinematicIntro.classList.add(
                        "exit"
                    );

                }, 3200);

            }

        });


    observer.observe(
        birthdayLock,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

});
/* =========================================
   STEP 05 — HERO UNIVERSE ACTIVATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const birthdayLock =
        document.getElementById("birthday-lock");

    const cinematicIntro =
        document.getElementById("cinematic-intro");

    const heroUniverse =
        document.getElementById("hero-universe");

    const foundation =
        document.querySelector(".foundation");


    if (
        !birthdayLock ||
        !cinematicIntro ||
        !heroUniverse
    ) {
        return;
    }


    const observer =
        new MutationObserver(() => {

            if (
                birthdayLock.classList.contains(
                    "birthday-lock-hidden"
                )
            ) {

                /*
                 * Old Step 01/02 card hide
                 */
                if (foundation) {
                    foundation.style.display = "none";
                }


                /*
                 * Hero prepare
                 */
                heroUniverse.classList.add(
                    "hero-visible"
                );

            }

        });


    observer.observe(
        birthdayLock,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );


    /*
     * Hero button
     */
    const heroButton =
        document.getElementById(
            "hero-enter-button"
        );


    if (heroButton) {

        heroButton.addEventListener(
            "click",
            () => {

                heroButton.innerHTML =
                    "<span>UNIVERSE UNLOCKING</span> <span>✦</span>";

            }
        );

    }

});
/* =========================================
   STEP 05 FIX — CINEMATIC FINISH HANDLER
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cinematicIntro =
        document.getElementById("cinematic-intro");

    const heroUniverse =
        document.getElementById("hero-universe");


    if (!cinematicIntro || !heroUniverse) {
        return;
    }


    cinematicIntro.addEventListener(
        "animationend",
        (event) => {

            /*
             * Sirf cinematicExit animation
             * complete hone par Hero reveal hoga.
             */

            if (
                event.animationName ===
                "cinematicExit"
            ) {

                /*
                 * Cinematic ko completely remove
                 * from visible state.
                 */
                cinematicIntro.classList.remove(
                    "active"
                );

                cinematicIntro.classList.remove(
                    "exit"
                );

                /*
                 * Ab Hero safely reveal.
                 */
                heroUniverse.classList.add(
                    "hero-visible"
                );

            }

        }
    );

});
/* =========================================
   STEP 06 — HER UNIVERSE MENU
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const heroButton =
        document.getElementById(
            "hero-enter-button"
        );

    const heroUniverse =
        document.getElementById(
            "hero-universe"
        );

    const universeMenu =
        document.getElementById(
            "universe-menu"
        );


    if (
        !heroButton ||
        !heroUniverse ||
        !universeMenu
    ) {
        return;
    }


    heroButton.addEventListener(
        "click",
        () => {

            heroUniverse.classList.remove(
                "hero-visible"
            );

            setTimeout(() => {

                universeMenu.classList.add(
                    "menu-visible"
                );

            }, 700);

        }
    );


    const universeCards =
        document.querySelectorAll(
            ".universe-card"
        );


    universeCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const world =
                    card.dataset.world;

                console.log(
                    "CH-NIMRA Universe selected:",
                    world
                );

            }
        );

    });

});
/* =========================================================
   STEP 07 — HER SMILE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const smileWorld = document.getElementById("smile-world");
    const smileBackButton = document.getElementById("smile-back-button");
    const smileContinueButton = document.getElementById("smile-continue-button");

    const smileCard = document.querySelector(
        '.universe-card[data-world="smile"]'
    );

    const universeMenu = document.getElementById("universe-menu");

    if (!smileWorld || !smileCard || !universeMenu) {
        console.warn("Step 07: HER SMILE elements not found.");
        return;
    }

    function openSmileWorld() {

        universeMenu.classList.remove("menu-visible");

        setTimeout(() => {
            smileWorld.classList.add("smile-visible");
        }, 500);
    }

    function closeSmileWorld() {

        smileWorld.classList.remove("smile-visible");

        setTimeout(() => {
            universeMenu.classList.add("menu-visible");
        }, 500);
    }

    smileCard.addEventListener("click", () => {
        openSmileWorld();
    });

    smileBackButton.addEventListener("click", () => {
        closeSmileWorld();
    });

    smileContinueButton.addEventListener("click", () => {
        closeSmileWorld();
    });

    console.log("STEP 07 — HER SMILE initialized ✦");
});

/* =========================================================
   STEP 08 — MEMORY GALAXY 2.0
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const memoryWorld =
        document.getElementById("memory-world");

    const memoryCard =
        document.querySelector(
            '.universe-card[data-world="memories"]'
        );

    const universeMenu =
        document.getElementById("universe-menu");

    const memoryBoot =
        document.getElementById("memory-boot");

    const memoryMain =
        document.getElementById("memory-main");

    const memoryBackButton =
        document.getElementById("memory-back-button");

    const memoryFragments =
        document.querySelectorAll(".memory-fragment");

    const memoryViewer =
        document.getElementById("memory-viewer");

    const memoryViewerImage =
        document.getElementById("memory-viewer-image");

    const memoryBackgroundImage =
        document.getElementById("memory-background-image");

    const memoryViewerNumber =
        document.getElementById("memory-viewer-number");

    const memoryViewerClose =
        document.getElementById("memory-viewer-close");

    const memoryPrev =
        document.getElementById("memory-prev");

    const memoryNext =
        document.getElementById("memory-next");

    const memoryCounterText =
        document.getElementById("memory-counter-text");

    const memoryProgressBar =
        document.getElementById("memory-progress-bar");

    const memoryReplayButton =
        document.getElementById("memory-replay-button");

    const memoryEnding =
        document.getElementById("memory-ending");

    const memoryEndingBack =
        document.getElementById("memory-ending-back");


    if (
        !memoryWorld ||
        !memoryCard ||
        !universeMenu
    ) {
        console.warn(
            "Step 08: MEMORY GALAXY 2.0 elements not found."
        );

        return;
    }


    let currentMemory = 1;


    /* =========================
       PHOTO PATH
       ========================= */

    function getPhotoPath(number) {

        return `photo${String(number).padStart(2, "0")}.jpg`;

    }


    /* =========================
       OPEN GALAXY
       ========================= */

    function openMemoryGalaxy() {

        universeMenu.classList.remove(
            "menu-visible"
        );

        memoryWorld.classList.add(
            "memory-visible"
        );

        memoryEnding.classList.remove(
            "ending-visible"
        );

        memoryViewer.classList.remove(
            "viewer-visible"
        );

        memoryMain.classList.remove(
            "memory-main-visible"
        );

        memoryBoot.classList.remove(
            "memory-boot-hidden"
        );

        setTimeout(() => {

            memoryBoot.classList.add(
                "memory-boot-hidden"
            );

            memoryMain.classList.add(
                "memory-main-visible"
            );

        }, 2700);

    }


    /* =========================
       CLOSE GALAXY
       ========================= */

    function closeMemoryGalaxy() {

        memoryViewer.classList.remove(
            "viewer-visible"
        );

        memoryEnding.classList.remove(
            "ending-visible"
        );

        memoryWorld.classList.remove(
            "memory-visible"
        );

        setTimeout(() => {

            universeMenu.classList.add(
                "menu-visible"
            );

        }, 500);

    }


    /* =========================
       OPEN MEMORY
       ========================= */

    function openMemory(number) {

        currentMemory = number;

        const path =
            getPhotoPath(currentMemory);

        memoryViewerImage.src = path;

        memoryBackgroundImage.src = path;

        memoryViewerNumber.textContent =
            `MEMORY ${String(currentMemory).padStart(2, "0")} / 12`;

        memoryCounterText.textContent =
            `${String(currentMemory).padStart(2, "0")} / 12`;

        memoryProgressBar.style.width =
            `${(currentMemory / 12) * 100}%`;

        memoryViewer.classList.add(
            "viewer-visible"
        );

    }


    /* =========================
       CLOSE VIEWER
       ========================= */

    function closeMemoryViewer() {

        memoryViewer.classList.remove(
            "viewer-visible"
        );

    }


    /* =========================
       NEXT
       ========================= */

    function nextMemory() {

        currentMemory++;

        if (currentMemory > 12) {

            currentMemory = 1;

        }

        openMemory(currentMemory);

    }


    /* =========================
       PREVIOUS
       ========================= */

    function previousMemory() {

        currentMemory--;

        if (currentMemory < 1) {

            currentMemory = 12;

        }

        openMemory(currentMemory);

    }


    /* =========================
       ENDING
       ========================= */

    function openMemoryEnding() {

        memoryViewer.classList.remove(
            "viewer-visible"
        );

        memoryEnding.classList.add(
            "ending-visible"
        );

    }


    /* =========================
       MENU CARD
       ========================= */

    memoryCard.addEventListener(
        "click",
        () => {

            openMemoryGalaxy();

        }
    );


    /* =========================
       MEMORY FRAGMENTS
       ========================= */

    memoryFragments.forEach(
        (fragment) => {

            fragment.addEventListener(
                "click",
                () => {

                    const number =
                        Number(
                            fragment.dataset.photo
                        );

                    openMemory(number);

                }
            );

        }
    );


    /* =========================
       BACK TO UNIVERSE
       ========================= */

    memoryBackButton.addEventListener(
        "click",
        () => {

            closeMemoryGalaxy();

        }
    );


    /* =========================
       VIEWER CLOSE
       ========================= */

    memoryViewerClose.addEventListener(
        "click",
        () => {

            closeMemoryViewer();

        }
    );


    /* =========================
       NAVIGATION
       ========================= */

    memoryPrev.addEventListener(
        "click",
        () => {

            previousMemory();

        }
    );

    memoryNext.addEventListener(
        "click",
        () => {

            nextMemory();

        }
    );


    /* =========================
       REPLAY MEMORY
       ========================= */

    memoryReplayButton.addEventListener(
        "click",
        () => {

            memoryViewer.classList.remove(
                "memory-replaying"
            );

            void memoryViewer.offsetWidth;

            memoryViewer.classList.add(
                "memory-replaying"
            );

            setTimeout(() => {

                memoryViewer.classList.remove(
                    "memory-replaying"
                );

            }, 1700);

        }
    );


    /* =========================
       KEYBOARD
       ========================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !memoryViewer.classList.contains(
                    "viewer-visible"
                )
            ) {
                return;
            }

            if (event.key === "ArrowLeft") {

                previousMemory();

            }

            if (event.key === "ArrowRight") {

                nextMemory();

            }

            if (event.key === "Escape") {

                closeMemoryViewer();

            }

        }
    );


    /* =========================
       TOUCH SWIPE
       ========================= */

    let touchStartX = 0;
    let touchEndX = 0;


    memoryViewer.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    memoryViewer.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) < 50) {

                return;

            }


            if (difference > 0) {

                nextMemory();

            } else {

                previousMemory();

            }

        },
        { passive: true }
    );


    /* =========================
       CLICK BACKGROUND
       ========================= */

    memoryViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target === memoryViewer
            ) {

                closeMemoryViewer();

            }

        }
    );


    /* =========================
       SHOW ENDING
       ========================= */

    memoryEndingBack.addEventListener(
        "click",
        () => {

            memoryEnding.classList.remove(
                "ending-visible"
            );

            closeMemoryGalaxy();

        }
    );


    /*
       Double-clicking the last memory
       is NOT used intentionally.
       The ending remains a clean separate scene.
    */


    console.log(
        "STEP 08 — MEMORY GALAXY 2.0 initialized ✦"
    );

});

/* =========================================================
   STEP 09 — WHY YOU'RE SPECIAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const specialWorld =
        document.getElementById("special-world");

    const specialBackButton =
        document.getElementById("special-back-button");

    const specialContinueButton =
        document.getElementById("special-continue-button");

    const universeMenu =
        document.getElementById("universe-menu");

    const specialCard =
        document.querySelector(
            '.universe-card[data-world="special"]'
        );

    if (
        !specialWorld ||
        !universeMenu ||
        !specialCard
    ) {
        console.warn(
            "Step 09: WHY YOU'RE SPECIAL elements not found."
        );

        return;
    }

    function openSpecialWorld() {

        universeMenu.classList.remove("menu-visible");

        setTimeout(() => {

            specialWorld.classList.add("special-visible");

        }, 500);
    }

    function closeSpecialWorld() {

        specialWorld.classList.remove("special-visible");

        setTimeout(() => {

            universeMenu.classList.add("menu-visible");

        }, 500);
    }

    specialCard.addEventListener("click", () => {

        openSpecialWorld();

    });

    specialBackButton.addEventListener("click", () => {

        closeSpecialWorld();

    });

    specialContinueButton.addEventListener("click", () => {

        closeSpecialWorld();

    });

    console.log(
        "STEP 09 — WHY YOU'RE SPECIAL initialized ✦"
    );

});
/* =========================================================
   STEP 10 — CLASSIFIED ARCHIVE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const classifiedWorld =
        document.getElementById("classified-world");

    const classifiedCard =
        document.querySelector(
            '.universe-card[data-world="classified"]'
        );

    const universeMenu =
        document.getElementById("universe-menu");

    const classifiedSecurity =
        document.getElementById(
            "classified-security"
        );

    const classifiedMain =
        document.getElementById(
            "classified-main"
        );

    const decryptButton =
        document.getElementById(
            "classified-decrypt-button"
        );

    const classifiedReveal =
        document.getElementById(
            "classified-reveal"
        );

    const classifiedBackButton =
        document.getElementById(
            "classified-back-button"
        );

    const classifiedFinalButton =
        document.getElementById(
            "classified-final-button"
        );


    if (
        !classifiedWorld ||
        !classifiedCard
    ) {
        console.warn(
            "Step 10: CLASSIFIED elements not found."
        );

        return;
    }


    /* =========================
       OPEN CLASSIFIED
       ========================= */

    function openClassified() {

        universeMenu.classList.remove(
            "menu-visible"
        );

        classifiedWorld.classList.add(
            "classified-visible"
        );

        classifiedMain.classList.remove(
            "main-visible"
        );

        classifiedReveal.classList.remove(
            "reveal-visible"
        );

        classifiedSecurity.classList.remove(
            "security-hidden"
        );


        setTimeout(() => {

            classifiedSecurity.classList.add(
                "security-hidden"
            );

            classifiedMain.classList.add(
                "main-visible"
            );

        }, 2500);

    }


    /* =========================
       CLOSE CLASSIFIED
       ========================= */

    function closeClassified() {

        classifiedWorld.classList.remove(
            "classified-visible"
        );

        classifiedSecurity.classList.remove(
            "security-hidden"
        );

        classifiedMain.classList.remove(
            "main-visible"
        );

        classifiedReveal.classList.remove(
            "reveal-visible"
        );


        setTimeout(() => {

            universeMenu.classList.add(
                "menu-visible"
            );

        }, 500);

    }


    /* =========================
       CLASSIFIED CARD
       ========================= */

    classifiedCard.addEventListener(
        "click",
        () => {

            openClassified();

        }
    );


    /* =========================
       DECRYPT
       ========================= */

    decryptButton.addEventListener(
        "click",
        () => {

            classifiedMain.classList.remove(
                "main-visible"
            );

            setTimeout(() => {

                classifiedReveal.classList.add(
                    "reveal-visible"
                );

            }, 450);

        }
    );


    /* =========================
       BACK
       ========================= */

    classifiedBackButton.addEventListener(
        "click",
        () => {

            closeClassified();

        }
    );


    /* =========================
       FINAL BUTTON
       ========================= */

    classifiedFinalButton.addEventListener(
        "click",
        () => {

            /*
             * STEP 11 FINAL ARCHIVE
             * will be connected here later.
             *
             * DO NOT add the final secret
             * message here yet.
             */

            console.log(
                "FINAL ARCHIVE READY — STEP 11"
            );

        }
    );


    console.log(
        "STEP 10 — CLASSIFIED ARCHIVE initialized ✦"
    );

});
/* =========================================================
   STEP 11 — THE BIRTHDAY MOMENT
   ========================================================= */

(() => {

    const birthdayMoment = document.getElementById("birthday-moment");

    const birthdayIntro = document.getElementById("birthday-intro");
    const birthdayCelebration =
        document.getElementById("birthday-celebration");

    const birthdaySongButton =
        document.getElementById("birthday-song-button");

    const birthdaySong =
        document.getElementById("birthday-song");

    const birthdaySongStatus =
        document.getElementById("birthday-song-status");

    const birthdayWish =
        document.getElementById("birthday-wish");

    const makeWishButton =
        document.getElementById("make-wish-button");

    const birthdayEnding =
        document.getElementById("birthday-ending");

    const openFinalArchiveButton =
        document.getElementById("open-final-archive-button");

    const classifiedFinalButton =
        document.getElementById("classified-final-button");


    /* -----------------------------------------------------
       OPEN STEP 11 FROM CLASSIFIED
       ----------------------------------------------------- */

    function openBirthdayMoment() {

        if (!birthdayMoment) return;

        birthdayMoment.classList.add("birthday-visible");

        birthdayIntro.style.opacity = "1";
        birthdayIntro.style.visibility = "visible";

        birthdayCelebration.classList.remove(
            "birthday-celebration-active"
        );

        birthdayWish.classList.remove("wish-visible");
        birthdayEnding.classList.remove("ending-visible");

        setTimeout(() => {

            birthdayIntro.style.opacity = "0";
            birthdayIntro.style.visibility = "hidden";

            birthdayCelebration.classList.add(
                "birthday-celebration-active"
            );

        }, 3000);
    }


    /* -----------------------------------------------------
       STEP 10 → STEP 11 CONNECTION
       ----------------------------------------------------- */

    if (classifiedFinalButton) {

        classifiedFinalButton.addEventListener(
            "click",
            () => {

                const classifiedWorld =
                    document.getElementById("classified-world");

                if (classifiedWorld) {
                    classifiedWorld.style.opacity = "0";
                    classifiedWorld.style.pointerEvents = "none";
                }

                setTimeout(() => {

                    if (classifiedWorld) {
                        classifiedWorld.style.visibility = "hidden";
                    }

                    openBirthdayMoment();

                }, 900);

            }
        );

    }


    /* -----------------------------------------------------
       BIRTHDAY SONG
       ----------------------------------------------------- */

    if (birthdaySongButton && birthdaySong) {

        birthdaySongButton.addEventListener(
            "click",
            async () => {

                try {

                    if (birthdaySong.paused) {

                        await birthdaySong.play();

                        birthdaySongButton.innerHTML =
                            '<span class="song-icon">❚❚</span>' +
                            '<span>PAUSE BIRTHDAY</span>';

                        birthdaySongStatus.textContent =
                            "PLAYING A LITTLE SOMETHING FOR CH-NIMRA ✦";

                    } else {

                        birthdaySong.pause();

                        birthdaySongButton.innerHTML =
                            '<span class="song-icon">▶</span>' +
                            '<span>PLAY HER BIRTHDAY</span>';

                        birthdaySongStatus.textContent =
                            "A SPECIAL SONG FOR A SPECIAL SOUL";

                    }

                } catch (error) {

                    console.log(
                        "Birthday song could not be played:",
                        error
                    );

                    birthdaySongStatus.textContent =
                        "TAP AGAIN TO START THE BIRTHDAY SONG";
                }

            }
        );

    }


    /* -----------------------------------------------------
       SONG END → WISH
       ----------------------------------------------------- */

    if (birthdaySong) {

        birthdaySong.addEventListener(
            "ended",
            () => {

                birthdaySongButton.innerHTML =
                    '<span class="song-icon">↻</span>' +
                    '<span>PLAY AGAIN</span>';

                birthdaySongStatus.textContent =
                    "THE SONG HAS ENDED ✦";

                setTimeout(() => {

                    birthdayCelebration.style.opacity = "0";
                    birthdayCelebration.style.visibility = "hidden";

                    birthdayWish.classList.add("wish-visible");

                }, 1200);

            }
        );

    }


    /* -----------------------------------------------------
       MAKE A WISH
       ----------------------------------------------------- */

    if (makeWishButton) {

        makeWishButton.addEventListener(
            "click",
            () => {

                makeWishButton.textContent =
                    "WISH RECEIVED ✦";

                makeWishButton.disabled = true;

                const wishOrb =
                    document.getElementById("wish-orb");

                if (wishOrb) {

                    wishOrb.style.transform = "scale(1.8)";
                    wishOrb.style.opacity = "0";
                    wishOrb.style.transition =
                        "all 1.4s ease";
                }

                setTimeout(() => {

                    birthdayWish.style.opacity = "0";
                    birthdayWish.style.visibility = "hidden";

                    birthdayEnding.classList.add(
                        "ending-visible"
                    );

                }, 1600);

            }
        );

    }


    /* -----------------------------------------------------
       FINAL ARCHIVE BUTTON
       ----------------------------------------------------- */

    if (openFinalArchiveButton) {

        openFinalArchiveButton.addEventListener(
            "click",
            () => {

                console.log(
                    "FINAL ARCHIVE READY — STEP 12"
                );

                /*
                 * STEP 12 will connect here.
                 * The final secret message is intentionally
                 * NOT added in Step 11.
                 */

            }
        );

    }


    console.log(
        "STEP 11 — THE BIRTHDAY MOMENT READY ✦"
    );

})();

/* =========================================================
   STEP 11 — FINAL FLOW FIX
   Prevent duplicate scene transitions
   ========================================================= */

(() => {

    const song = document.getElementById("birthday-song");
    const celebration =
        document.getElementById("birthday-celebration");

    const wish =
        document.getElementById("birthday-wish");

    const ending =
        document.getElementById("birthday-ending");

    const songButton =
        document.getElementById("birthday-song-button");

    const songStatus =
        document.getElementById("birthday-song-status");

    const wishButton =
        document.getElementById("make-wish-button");

    let songFinished = false;
    let wishOpened = false;


    /* =====================================================
       SONG FINISHED
       IMPORTANT:
       Do NOT open Wish automatically.
       Let the song finish completely.
       ===================================================== */

    if (song) {

        song.addEventListener("ended", (event) => {

            /*
             * Stop all older Step 11 "ended" listeners.
             */
            event.stopImmediatePropagation();

            songFinished = true;

            /* Keep Birthday screen visible */
            if (celebration) {

                celebration.style.display = "flex";
                celebration.style.opacity = "1";
                celebration.style.visibility = "visible";
                celebration.style.pointerEvents = "auto";
                celebration.style.animation = "none";

                celebration.classList.remove(
                    "birthday-celebration-active"
                );
            }


            /* Hide every other Step 11 scene */
            if (wish) {

                wish.classList.remove("wish-visible");

                wish.style.opacity = "0";
                wish.style.visibility = "hidden";
                wish.style.pointerEvents = "none";
                wish.style.display = "none";
            }

            if (ending) {

                ending.classList.remove("ending-visible");

                ending.style.opacity = "0";
                ending.style.visibility = "hidden";
                ending.style.pointerEvents = "none";
                ending.style.display = "none";
            }


            /* Change button into Continue */
            if (songButton) {

                songButton.disabled = false;

                songButton.innerHTML =
                    '<span class="song-icon">→</span>' +
                    '<span>CONTINUE TO MAKE A WISH</span>';
            }


            if (songStatus) {

                songStatus.textContent =
                    "THE SONG HAS ENDED ✦";

            }

        }, true);

    }


    /* =====================================================
       SONG BUTTON
       First click = play
       After song = move to Wish
       ===================================================== */

    if (songButton) {

        songButton.addEventListener("click", (event) => {

            event.stopImmediatePropagation();

            /* After song has completely finished */
            if (songFinished) {

                songFinished = false;

                if (celebration) {

                    celebration.style.opacity = "0";
                    celebration.style.visibility = "hidden";
                    celebration.style.pointerEvents = "none";
                    celebration.style.display = "none";
                }

                if (wish) {

                    wish.style.display = "flex";
                    wish.style.opacity = "0";
                    wish.style.visibility = "hidden";
                    wish.style.pointerEvents = "auto";

                    requestAnimationFrame(() => {

                        wish.classList.add("wish-visible");

                    });

                }

                return;
            }


            /* Otherwise let the original play/pause logic work */

        }, true);

    }


    /* =====================================================
       MAKE A WISH
       Completely replace the old transition
       ===================================================== */

    if (wishButton) {

        wishButton.addEventListener("click", (event) => {

            event.stopImmediatePropagation();

            if (wishOpened) return;

            wishOpened = true;

            wishButton.textContent =
                "WISH RECEIVED ✦";

            wishButton.disabled = true;


            /* Hide Wish scene completely */
            if (wish) {

                wish.classList.remove("wish-visible");

                wish.style.opacity = "0";
                wish.style.visibility = "hidden";
                wish.style.pointerEvents = "none";
                wish.style.display = "none";
            }


            /* Make sure Birthday scene is also gone */
            if (celebration) {

                celebration.style.opacity = "0";
                celebration.style.visibility = "hidden";
                celebration.style.pointerEvents = "none";
                celebration.style.display = "none";
            }


            /* Hide everything before showing ending */
            if (ending) {

                ending.classList.remove("ending-visible");

                ending.style.display = "flex";
                ending.style.opacity = "0";
                ending.style.visibility = "hidden";
                ending.style.pointerEvents = "auto";

                requestAnimationFrame(() => {

                    ending.classList.add("ending-visible");

                });

            }

        }, true);

    }


    console.log(
        "STEP 11 FINAL FLOW FIX ACTIVE ✦"
    );

})();
/* =========================================================
   STEP 11 — CLEAN AUDIO & SCENE CONTROLLER
   ========================================================= */

(() => {

    const oldSongButton =
        document.getElementById("birthday-song-button");

    const oldSong =
        document.getElementById("birthday-song");

    const oldWishButton =
        document.getElementById("make-wish-button");

    const celebration =
        document.getElementById("birthday-celebration");

    const wish =
        document.getElementById("birthday-wish");

    const ending =
        document.getElementById("birthday-ending");

    const status =
        document.getElementById("birthday-song-status");


    /* ---------------------------------------------------------
       REMOVE ALL OLD LISTENERS FROM SONG BUTTON
       --------------------------------------------------------- */

    let songButton = oldSongButton;

    if (oldSongButton) {

        songButton = oldSongButton.cloneNode(true);

        oldSongButton.replaceWith(songButton);

    }


    /* ---------------------------------------------------------
       REMOVE ALL OLD LISTENERS FROM AUDIO
       --------------------------------------------------------- */

    let song = oldSong;

    if (oldSong) {

        song = oldSong.cloneNode(true);

        oldSong.replaceWith(song);

    }


    /* ---------------------------------------------------------
       REMOVE OLD WISH BUTTON LISTENERS
       --------------------------------------------------------- */

    let wishButton = oldWishButton;

    if (oldWishButton) {

        wishButton = oldWishButton.cloneNode(true);

        oldWishButton.replaceWith(wishButton);

    }


    let songFinished = false;


    /* ---------------------------------------------------------
       PLAY / PAUSE / CONTINUE
       --------------------------------------------------------- */

    if (songButton && song) {

        songButton.addEventListener("click", async () => {

            /* Song already finished */
            if (songFinished) {

                songFinished = false;

                if (celebration) {

                    celebration.style.display = "none";
                    celebration.style.opacity = "0";
                    celebration.style.visibility = "hidden";
                    celebration.style.pointerEvents = "none";

                }

                if (wish) {

                    wish.style.display = "flex";
                    wish.style.visibility = "visible";
                    wish.style.pointerEvents = "auto";

                    requestAnimationFrame(() => {
                        wish.classList.add("wish-visible");
                    });

                }

                return;
            }


            /* Pause */
            if (!song.paused) {

                song.pause();

                songButton.innerHTML =
                    '<span class="song-icon">▶</span>' +
                    '<span>RESUME BIRTHDAY</span>';

                if (status) {
                    status.textContent =
                        "BIRTHDAY SONG PAUSED";
                }

                return;
            }


            /* Play */
            try {

                await song.play();

                songButton.innerHTML =
                    '<span class="song-icon">❚❚</span>' +
                    '<span>PAUSE BIRTHDAY</span>';

                if (status) {
                    status.textContent =
                        "PLAYING A LITTLE SOMETHING FOR CH-NIMRA ✦";
                }

            } catch (error) {

                console.log("Audio playback error:", error);

                if (status) {
                    status.textContent =
                        "TAP AGAIN TO PLAY THE SONG";
                }

            }

        });

    }


    /* ---------------------------------------------------------
       SONG FULLY FINISHED
       --------------------------------------------------------- */

    if (song) {

        song.addEventListener("ended", () => {

            songFinished = true;

            /* Keep birthday screen visible */
            if (celebration) {

                celebration.style.display = "flex";
                celebration.style.opacity = "1";
                celebration.style.visibility = "visible";
                celebration.style.pointerEvents = "auto";
                celebration.style.animation = "none";

                celebration.classList.remove(
                    "birthday-celebration-active"
                );

            }


            /* Make sure Wish is hidden */
            if (wish) {

                wish.classList.remove("wish-visible");

                wish.style.display = "none";
                wish.style.opacity = "0";
                wish.style.visibility = "hidden";
                wish.style.pointerEvents = "none";

            }


            /* Change button */
            if (songButton) {

                songButton.disabled = false;

                songButton.innerHTML =
                    '<span class="song-icon">→</span>' +
                    '<span>CONTINUE TO MAKE A WISH</span>';

            }


            if (status) {

                status.textContent =
                    "THE SONG HAS ENDED ✦";

            }

        });

    }


    /* ---------------------------------------------------------
       MAKE A WISH
       --------------------------------------------------------- */

    if (wishButton) {

        wishButton.addEventListener("click", () => {

            /* Hide Wish completely */
            if (wish) {

                wish.classList.remove("wish-visible");

                wish.style.display = "none";
                wish.style.opacity = "0";
                wish.style.visibility = "hidden";
                wish.style.pointerEvents = "none";

            }


            /* Show ending */
            if (ending) {

                ending.style.display = "flex";
                ending.style.visibility = "visible";
                ending.style.pointerEvents = "auto";

                requestAnimationFrame(() => {

                    ending.classList.add("ending-visible");

                });

            }

        });

    }


    console.log(
        "STEP 11 — CLEAN AUDIO CONTROLLER ACTIVE ✦"
    );

})();
/* =========================================================
   STEP 12 — FINAL ARCHIVE CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const finalArchive = document.getElementById("final-archive");
    const finalCountdown = document.getElementById("final-countdown");
    const finalCountdownNumber = document.getElementById("final-countdown-number");
    const finalReady = document.getElementById("final-ready");
    const finalBirthday = document.getElementById("final-birthday-message");
    const finalSecret = document.getElementById("final-secret");
    const finalPS = document.getElementById("final-ps");
    const finalShutdown = document.getElementById("final-shutdown");

    const openFinalButton = document.getElementById("open-final-archive-button");

    if (!finalArchive || !openFinalButton) {
        console.warn("Step 12 elements not found.");
        return;
    }

    let finalStarted = false;

    function hideAllFinalScenes() {
        [
            finalCountdown,
            finalReady,
            finalBirthday,
            finalSecret,
            finalPS,
            finalShutdown
        ].forEach(scene => {
            if (scene) {
                scene.classList.remove("final-scene-visible");
            }
        });
    }


    function showFinalScene(scene) {
        hideAllFinalScenes();

        if (scene) {
            scene.classList.add("final-scene-visible");
        }
    }


    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function startFinalArchive() {

        if (finalStarted) return;
        finalStarted = true;

        /* OPEN FINAL ARCHIVE */
        finalArchive.classList.add("final-active");

        hideAllFinalScenes();

        await wait(900);

        /* =========================
           23 SECOND COUNTDOWN
           ========================= */

        showFinalScene(finalCountdown);

        for (let number = 23; number >= 1; number--) {

            finalCountdownNumber.textContent = number;

            finalCountdownNumber.style.animation = "none";

            /* Force animation restart */
            void finalCountdownNumber.offsetWidth;

            finalCountdownNumber.style.animation =
                "finalNumberPulse 1s ease-in-out";

            await wait(1000);
        }


        /* =========================
           ARCHIVE READY
           ========================= */

        showFinalScene(finalReady);

        await wait(2600);


        /* =========================
           HAPPY BIRTHDAY
           ========================= */

        showFinalScene(finalBirthday);

        await wait(7000);


        /* =========================
           SECRET MESSAGE
           ========================= */

        showFinalScene(finalSecret);

        /*
         * Give the user enough time to actually read.
         * The secret message is scrollable.
         */

        await wait(2500);

        /*
         * Keep the secret message open for a long cinematic
         * reading window. User can scroll normally.
         */
        await wait(22000);


        /* =========================
           P.S.
           ========================= */

        showFinalScene(finalPS);

        await wait(7000);


        /* =========================
           CINEMATIC SHUTDOWN
           ========================= */

        showFinalScene(finalShutdown);

        await wait(6000);

        /*
         * FINAL BLACK SCREEN
         */

        finalArchive.style.transition =
            "opacity 2.5s ease, visibility 2.5s ease";

        finalArchive.style.opacity = "0";

        await wait(2600);

        finalArchive.classList.remove("final-active");

        finalArchive.style.opacity = "";
        finalArchive.style.visibility = "";

        finalStarted = false;
    }


    /* =====================================================
       FINAL ARCHIVE BUTTON
       ===================================================== */

    openFinalButton.addEventListener("click", () => {
        startFinalArchive();
    });

});
/* =========================================================
   STEP 12 FINAL FIX
   - Full secret message
   - Letter-by-letter typing
   - Automatic scrolling
   - Prevent Step 11 from returning
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const oldFinalButton =
        document.getElementById("open-final-archive-button");

    const finalArchive =
        document.getElementById("final-archive");

    const finalCountdown =
        document.getElementById("final-countdown");

    const finalCountdownNumber =
        document.getElementById("final-countdown-number");

    const finalReady =
        document.getElementById("final-ready");

    const finalBirthday =
        document.getElementById("final-birthday-message");

    const finalSecret =
        document.getElementById("final-secret");

    const finalPS =
        document.getElementById("final-ps");

    const finalShutdown =
        document.getElementById("final-shutdown");

    const secretContent =
        document.querySelector(".final-secret-content");

    if (
        !oldFinalButton ||
        !finalArchive ||
        !finalCountdown ||
        !finalCountdownNumber ||
        !finalReady ||
        !finalBirthday ||
        !finalSecret ||
        !finalPS ||
        !finalShutdown ||
        !secretContent
    ) {
        console.warn("STEP 12 FINAL FIX: Elements missing.");
        return;
    }


    /* =====================================================
       REMOVE OLD FINAL BUTTON LISTENERS
       ===================================================== */

    const finalButton =
        oldFinalButton.cloneNode(true);

    oldFinalButton.replaceWith(finalButton);


    /* =====================================================
       SCENE CONTROL
       ===================================================== */

    function hideScenes() {

        [
            finalCountdown,
            finalReady,
            finalBirthday,
            finalSecret,
            finalPS,
            finalShutdown

        ].forEach(scene => {

            scene.classList.remove(
                "final-scene-visible"
            );

        });
    }


    function showScene(scene) {

        hideScenes();

        scene.classList.add(
            "final-scene-visible"
        );

    }


    function wait(ms) {

        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });

    }


    /* =====================================================
       TYPEWRITER
       ===================================================== */

    async function typeSecretMessage() {

        const paragraphs =
            Array.from(
                secretContent.querySelectorAll("p")
            );

        /*
         * Save original text before replacing it.
         */

        const originalTexts =
            paragraphs.map(paragraph => paragraph.textContent);


        /*
         * Hide all text first.
         */

        paragraphs.forEach(paragraph => {

            paragraph.textContent = "";
            paragraph.classList.remove(
                "typewriter-complete"
            );

        });


        /*
         * Scroll position reset.
         */

        finalSecret.scrollTop = 0;


        /*
         * Type each paragraph.
         */

        for (
            let paragraphIndex = 0;
            paragraphIndex < paragraphs.length;
            paragraphIndex++
        ) {

            const paragraph =
                paragraphs[paragraphIndex];

            const text =
                originalTexts[paragraphIndex];


            paragraph.classList.add(
                "typewriter-active"
            );


            for (
                let letterIndex = 0;
                letterIndex < text.length;
                letterIndex++
            ) {

                paragraph.textContent +=
                    text[letterIndex];


                /*
                 * Automatic cinematic scrolling.
                 */

                const targetScroll =
                    paragraph.offsetTop -
                    finalSecret.clientHeight * 0.28;

                finalSecret.scrollTo({
                    top: Math.max(0, targetScroll),
                    behavior: "smooth"
                });


                /*
                 * Letter speed.
                 */

                await wait(18);

            }


            paragraph.classList.remove(
                "typewriter-active"
            );

            paragraph.classList.add(
                "typewriter-complete"
            );


            /*
             * Tiny pause between paragraphs.
             */

            await wait(220);

        }


        /*
         * Small emotional pause after
         * the complete message.
         */

        await wait(1800);

    }


    /* =====================================================
       START FINAL ARCHIVE
       ===================================================== */

    async function startFinalArchive() {

        document.body.classList.add(
            "final-archive-running"
        );


        /*
         * Permanently hide Step 11 ending.
         */

        const birthdayEnding =
            document.getElementById(
                "birthday-ending"
            );

        if (birthdayEnding) {

            birthdayEnding.style.opacity = "0";
            birthdayEnding.style.visibility =
                "hidden";
            birthdayEnding.style.pointerEvents =
                "none";

        }


        /*
         * Open final archive.
         */

        finalArchive.classList.add(
            "final-active"
        );

        hideScenes();

        await wait(900);


        /* =================================================
           23 SECOND COUNTDOWN
           ================================================= */

        showScene(finalCountdown);

        for (
            let number = 23;
            number >= 1;
            number--
        ) {

            finalCountdownNumber.textContent =
                number;

            finalCountdownNumber.style.animation =
                "none";

            void finalCountdownNumber.offsetWidth;

            finalCountdownNumber.style.animation =
                "finalNumberPulse 1s ease-in-out";

            await wait(1000);

        }


        /* =================================================
           ARCHIVE READY
           ================================================= */

        showScene(finalReady);

        await wait(2600);


        /* =================================================
           HAPPY BIRTHDAY
           ================================================= */

        showScene(finalBirthday);

        await wait(7000);


        /* =================================================
           SECRET MESSAGE
           ================================================= */

        showScene(finalSecret);

        /*
         * Wait until the COMPLETE message
         * has actually finished typing.
         */

        await typeSecretMessage();


        /* =================================================
           P.S.
           ================================================= */

        showScene(finalPS);

        await wait(7000);


        /* =================================================
           CINEMATIC SHUTDOWN
           ================================================= */

        showScene(finalShutdown);

        await wait(6000);


        /* =================================================
           FINAL BLACK SCREEN
           ================================================= */

        finalArchive.style.transition =
            "opacity 2.5s ease";

        finalArchive.style.opacity = "0";

        await wait(2600);


        /*
         * Keep Step 11 hidden.
         * Do NOT reveal the old birthday scene again.
         */

        /* =====================================================
   FINAL END — NEVER RETURN TO STEP 11
   ===================================================== */

finalArchive.classList.remove(
    "final-active"
);

finalArchive.style.opacity = "";

/*
 * Keep Step 11 permanently hidden after
 * the final archive has completed.
 */

document.body.classList.add(
    "final-archive-complete"
);
      }
  
    /* =====================================================
       FINAL BUTTON
       ===================================================== */

    finalButton.addEventListener(
        "click",
        () => {

            startFinalArchive();

        }
    );

});
/* =========================================================
   STEP 12.5 — CINEMATIC BUTTERFLY ENDING CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const butterflyEnding =
        document.getElementById("butterfly-ending");

    const butterfly =
        document.getElementById("cinematic-butterfly");

    const butterflyTitle =
        document.getElementById("butterfly-end-title");

    const particleContainer =
        document.getElementById("butterfly-particles");

    if (
        !butterflyEnding ||
        !butterfly ||
        !butterflyTitle ||
        !particleContainer
    ) {
        return;
    }


    let butterflyStarted = false;


    /* =====================================================
       CREATE PURPLE STAR-DUST
       ===================================================== */

    function createButterflyParticle() {

        if (!butterflyStarted) return;

        const particle =
            document.createElement("span");

        particle.className =
            "butterfly-particle";

        const rect =
            butterfly.getBoundingClientRect();

        const spreadX =
            (Math.random() - 0.5) * 95;

        const spreadY =
            (Math.random() - 0.5) * 75;

        particle.style.left =
            `${rect.left + rect.width / 2 + spreadX}px`;

        particle.style.top =
            `${rect.top + rect.height / 2 + spreadY}px`;

        particle.style.animationDuration =
            `${1.1 + Math.random() * 1.4}s`;

        particle.style.transform =
            `scale(${0.45 + Math.random() * 1.3})`;

        particleContainer.appendChild(
            particle
        );

        setTimeout(() => {

            particle.remove();

        }, 2800);

    }


    /* =====================================================
       PARTICLE TRAIL
       ===================================================== */

    let particleTimer = null;

    function startParticleTrail() {

        particleTimer =
            setInterval(() => {

                createButterflyParticle();

                if (Math.random() > .55) {
                    createButterflyParticle();
                }

            }, 95);

    }


    function stopParticleTrail() {

        if (particleTimer) {

            clearInterval(
                particleTimer
            );

            particleTimer = null;

        }

    }


    /* =====================================================
       START FINAL BUTTERFLY
       ===================================================== */

    function startButterflyEnding() {

        if (butterflyStarted) {
            return;
        }

        butterflyStarted = true;


        butterflyEnding.classList.add(
            "butterfly-ending-active"
        );


        /* Give the black screen a moment */
        setTimeout(() => {

            butterflyEnding.classList.add(
                "butterfly-flight-active"
            );

            startParticleTrail();

        }, 900);


        /* THE END appears near the final
           part of the butterfly journey */

        setTimeout(() => {

            butterflyEnding.classList.add(
                "butterfly-title-active"
            );

        }, 7900);


        /* Butterfly + THE END disappear */

        setTimeout(() => {

            stopParticleTrail();

            butterflyEnding.classList.add(
                "butterfly-ending-fade"
            );

        }, 11600);


        /* Final cleanup */

        setTimeout(() => {

            butterflyEnding.classList.remove(
                "butterfly-ending-active",
                "butterfly-flight-active",
                "butterfly-title-active",
                "butterfly-ending-fade"
            );

            particleContainer.innerHTML = "";

            butterflyStarted = false;

        }, 14000);

    }


    /* =====================================================
       WAIT FOR EXISTING FINAL ARCHIVE TO COMPLETE
       ===================================================== */

    const bodyObserver =
        new MutationObserver(() => {

            if (
                document.body.classList.contains(
                    "final-archive-complete"
                )
            ) {

                bodyObserver.disconnect();

                /*
                 * Existing Step 12 has finished.
                 * Now launch the completely separate
                 * butterfly ending.
                 */

                setTimeout(() => {

                    startButterflyEnding();

                }, 900);

            }

        });


    bodyObserver.observe(
        document.body,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );


    console.log(
        "STEP 12.5 — REALISTIC BUTTERFLY ENDING READY 🦋"
    );

});