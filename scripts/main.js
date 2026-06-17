(() => {
  "use strict";

  document.querySelectorAll('a[href^="http"], a[href$=".pdf"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener";
  });

  const coverTrack = document.querySelector("[data-cover-track]");
  if (coverTrack) {
    const slides = Array.from(coverTrack.querySelectorAll("[data-cover-slide]"));
    const dots = Array.from(document.querySelectorAll("[data-cover-dot]"));
    const previous = document.querySelector("[data-cover-prev]");
    const next = document.querySelector("[data-cover-next]");
    const caption = document.querySelector("[data-cover-caption]");
    let activeIndex = 0;
    let scrollFrame = 0;

    const playActiveVideo = () => {
      slides.forEach((slide, index) => {
        const video = slide.querySelector("video");
        if (!video) return;
        if (index === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const setActiveCoverSlide = (index, shouldScroll) => {
      if (slides.length === 0) return;
      activeIndex = (index + slides.length) % slides.length;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
      });
      if (caption) {
        const activeCaption = slides[activeIndex].querySelector("figcaption");
        caption.textContent = activeCaption ? activeCaption.textContent : "";
      }
      if (shouldScroll) {
        slides[activeIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
      playActiveVideo();
    };

    const syncCoverSlide = () => {
      scrollFrame = 0;
      const width = coverTrack.clientWidth || 1;
      const index = Math.round(coverTrack.scrollLeft / width);
      setActiveCoverSlide(index, false);
    };

    coverTrack.addEventListener("scroll", () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(syncCoverSlide);
    });
    dots.forEach((dot, index) => dot.addEventListener("click", () => setActiveCoverSlide(index, true)));
    if (previous) previous.addEventListener("click", () => setActiveCoverSlide(activeIndex - 1, true));
    if (next) next.addEventListener("click", () => setActiveCoverSlide(activeIndex + 1, true));
    setActiveCoverSlide(0, false);
  }

  const motionSets = {
    sim2sim: [
      {
        id: "sonic2oli",
        name: "Sonic -> Oli",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_001.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_002.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_003.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_004.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_005.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/clipped/Data%202026-03-03%2016-20-35_006.bvh_Skeleton0_npy_raw_2_from8s.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_007.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Side Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_008.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_009.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/Data%202026-03-03%2016-20-35_010.bvh_Skeleton0_npy_raw_2.mp4"
          },
          {
            label: "Dance 1",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject1_npy_raw_seg02.mp4"
          },
          {
            label: "Dance 2",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject1_npy_raw_seg04.mp4"
          },
          {
            label: "Dance 3",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject1_npy_raw_seg05.mp4"
          },
          {
            label: "Dance 4",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject1_npy_raw_seg06.mp4"
          },
          {
            label: "Dance 5",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject1_npy_raw_seg07.mp4"
          },
          {
            label: "Dance 6",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject2_npy_raw_seg01.mp4"
          },
          {
            label: "Dance 7",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject2_npy_raw_seg02.mp4"
          },
          {
            label: "Dance 8",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance1_subject2_npy_raw_seg04.mp4"
          },
          {
            label: "Dance 9",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject1_npy_raw_seg06.mp4"
          },
          {
            label: "Dance 10",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject1_npy_raw_seg08.mp4"
          },
          {
            label: "Dance 11",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject2_npy_raw_seg06.mp4"
          },
          {
            label: "Dance 12",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject2_npy_raw_seg07.mp4"
          },
          {
            label: "Dance 13",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject2_npy_raw_seg08.mp4"
          },
          {
            label: "Dance 14",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject3_npy_raw_seg08.mp4"
          },
          {
            label: "Dance 15",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject4_npy_raw_seg07.mp4"
          },
          {
            label: "Dance 16",
            src: "vedio_data/sim2sim/sonic2/sonic2oli/sonic2oli_dance/dance2_subject4_npy_raw_seg08.mp4"
          }
        ]
      },
      {
        id: "sonic2luna",
        name: "Sonic -> Luna",
        motions: [
          {
            label: "Social 1",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_001.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Social 2",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_001.bvh_Skeleton0_npy_filtered_1.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_002.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_003.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_004.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_005.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_006.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_007.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Side Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_008.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_009.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Loco-Manip 1",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_010.bvh_Skeleton0_npy_filtered_0.mp4"
          },
          {
            label: "Loco-Manip 2",
            src: "vedio_data/sim2sim/sonic2/sonic2luna/Data%202026-03-03%2016-20-35_010.bvh_Skeleton0_npy_filtered_1.mp4"
          }
        ]
      },
      {
        id: "sonic2h1",
        name: "Sonic -> H1",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A3_M001.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A2_M002.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A3_M003.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A2_M004.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A3_M005.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A1_M006.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A3_M007.mp4"
          },
          {
            label: "Side Walk",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A1_M008.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A2_M009.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2sim/sonic2/sonic2h1/A3_M010.mp4"
          }
        ]
      }
    ],
    oliwbt2: [
      {
        id: "oliwbt2g1",
        name: "Oli-WBT2 -> G1",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A1_1.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A1_2.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A1_3.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A1_4.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A3_5.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A3_6.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A3_7.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A1_9.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2g1/A3_10.mp4"
          }
        ]
      },
      {
        id: "oliwbt2h1",
        name: "Oli-WBT2 -> H1",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A1_1.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A1_2.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A1_3.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A1_4.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A2_7.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A2_9.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2h1/A3_10.mp4"
          }
        ]
      },
      {
        id: "oliwbt2luna",
        name: "Oli-WBT2 -> Luna",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/01_social.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/02_slow.mp4"
          },
          {
            label: "Medium Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/03_medium.mp4"
          },
          {
            label: "Walk Forwards",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/04_walk_forwards.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/05_walk_backwards.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/06_turn_around.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/07_walk_and_turn.mp4"
          },
          {
            label: "Side Walk",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/08_side_walk.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/09_run.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2sim/oliwbt2/oliwbt2luna/clips/10_loco_manip.mp4"
          }
        ]
      }
    ],
    sim2real: [
      {
        id: "sonic2real-oli",
        name: "Sonic -> Oli",
        motions: [
          {
            label: "Social",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-1-social.mp4"
          },
          {
            label: "Slow Walk",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-2-slow%20walking.mp4"
          },
          {
            label: "Fast Walk",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-3-fast%20walking.mp4"
          },
          {
            label: "Walk Backwards",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-4-backward-walking.mp4"
          },
          {
            label: "Turn Around",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-5-turing.mp4"
          },
          {
            label: "Walk and Turn",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-6-turn%20walk.mp4"
          },
          {
            label: "Run",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-7-running.mp4"
          },
          {
            label: "Loco-Manip",
            src: "vedio_data/sim2real-sonic3/sonic_G12oli-8-locomanipulation.mp4"
          },
          {
            label: "Dance 1",
            src: "vedio_data/sim2real-sonic2-cropped/dance1.mp4"
          },
          {
            label: "Dance 2",
            src: "vedio_data/sim2real-sonic2-cropped/dance2.mp4"
          },
          {
            label: "Dance 3",
            src: "vedio_data/sim2real-sonic2-cropped/dance3.mp4"
          },
          {
            label: "Dance 4",
            src: "vedio_data/sim2real-sonic2-cropped/dance4.mp4"
          },
          {
            label: "Dance 5",
            src: "vedio_data/sim2real-sonic2-cropped/dance5.mp4"
          },
          {
            label: "Dance 6",
            src: "vedio_data/sim2real-sonic2-cropped/dance6.mp4"
          }
        ]
      }
    ]
  };

  document.querySelectorAll("[data-motion-player]").forEach((player) => {
    const video = player.querySelector("[data-motion-video]");
    const source = player.querySelector("[data-motion-source]");
    const title = player.querySelector("[data-motion-title]");
    const meta = player.querySelector("[data-motion-meta]");
    const list = player.querySelector("[data-motion-list]");
    const groupButtons = Array.from(player.querySelectorAll("[data-motion-group]"));
    const groups = motionSets[player.dataset.motionSet || "sim2sim"] || motionSets.sim2sim || [];

    if (!video || !source || !list || groups.length === 0) return;

    let activeGroupId = groups[0].id;
    let activeIndex = 0;

    const getGroup = (groupId) => groups.find((group) => group.id === groupId) || groups[0];

    const renderMotionList = () => {
      const group = getGroup(activeGroupId);
      list.replaceChildren();
      group.motions.forEach((motion, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = motion.label;
        button.classList.toggle("is-active", index === activeIndex);
        button.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
        button.addEventListener("click", () => selectMotion(group.id, index, true));
        list.appendChild(button);
      });
    };

    const selectMotion = (groupId, index, shouldPlay) => {
      const group = getGroup(groupId);
      const motion = group.motions[index];
      if (!motion) return;

      activeGroupId = group.id;
      activeIndex = index;
      groupButtons.forEach((button) => {
        const isActive = button.dataset.motionGroup === group.id;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      source.src = motion.src;
      video.style.objectFit = motion.fit || "";
      if (title) title.textContent = `${group.name} · ${motion.label}`;
      if (meta) meta.textContent = `Motion ${index + 1} / ${group.motions.length}`;
      renderMotionList();
      video.load();
      if (shouldPlay) video.play().catch(() => {});
    };

    groupButtons.forEach((button) => {
      button.addEventListener("click", () => selectMotion(button.dataset.motionGroup, 0, true));
    });

    selectMotion(activeGroupId, activeIndex, false);
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.dataset.copyTarget);
      if (!target) return;

      const text = target.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
        } catch (_) {
          /* best effort */
        }
        document.body.removeChild(textarea);
      }

      const label = button.querySelector("span");
      const previous = label ? label.textContent : "";
      button.classList.add("is-copied");
      if (label) label.textContent = "Copied";
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        if (label) label.textContent = previous;
      }, 1400);
    });
  });
})();
