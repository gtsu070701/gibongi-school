import type { ComponentType } from "react";
import type { ChapterEntry, QuizQuestion } from "./types";
import Chapter01 from "@/content/Chapter01";
import Chapter02 from "@/content/Chapter02";
import Chapter03 from "@/content/Chapter03";
import Chapter04 from "@/content/Chapter04";
import Chapter05 from "@/content/Chapter05";
import Chapter06 from "@/content/Chapter06";
import Chapter07 from "@/content/Chapter07";
import Chapter08 from "@/content/Chapter08";
import Chapter09 from "@/content/Chapter09";
import Chapter10 from "@/content/Chapter10";
import Chapter11 from "@/content/Chapter11";
import Chapter12 from "@/content/Chapter12";
import Chapter13 from "@/content/Chapter13";
import Chapter14 from "@/content/Chapter14";
import Chapter15 from "@/content/Chapter15";
import Chapter16 from "@/content/Chapter16";
import Chapter17 from "@/content/Chapter17";
import Chapter18 from "@/content/Chapter18";
import Chapter19 from "@/content/Chapter19";
import Chapter20 from "@/content/Chapter20";
import Chapter21 from "@/content/Chapter21";
import Chapter22 from "@/content/Chapter22";
import Chapter23 from "@/content/Chapter23";
import Chapter24 from "@/content/Chapter24";
import Chapter25 from "@/content/Chapter25";
import Chapter26 from "@/content/Chapter26";
import Chapter27 from "@/content/Chapter27";
import Chapter28 from "@/content/Chapter28";
import Chapter29 from "@/content/Chapter29";
import Chapter31 from "@/content/Chapter31";
import Chapter32 from "@/content/Chapter32";
import Chapter33 from "@/content/Chapter33";
import Chapter34 from "@/content/Chapter34";
import Chapter35 from "@/content/Chapter35";
import Chapter36 from "@/content/Chapter36";
import Chapter37 from "@/content/Chapter37";
import Chapter39 from "@/content/Chapter39";
import Chapter40 from "@/content/Chapter40";
import Chapter42 from "@/content/Chapter42";
import Chapter43 from "@/content/Chapter43";
import Chapter44 from "@/content/Chapter44";
import Chapter45 from "@/content/Chapter45";
import Chapter46 from "@/content/Chapter46";
import Chapter47 from "@/content/Chapter47";
import Chapter48 from "@/content/Chapter48";
import Chapter50 from "@/content/Chapter50";
import Chapter52 from "@/content/Chapter52";
import Chapter53 from "@/content/Chapter53";
import Chapter54 from "@/content/Chapter54";
import Chapter55 from "@/content/Chapter55";
import Chapter59 from "@/content/Chapter59";
import Chapter61 from "@/content/Chapter61";
import Chapter63 from "@/content/Chapter63";
import Chapter66 from "@/content/Chapter66";
import Chapter67 from "@/content/Chapter67";
import Chapter68 from "@/content/Chapter68";
import Chapter69 from "@/content/Chapter69";
import Chapter70 from "@/content/Chapter70";
import Chapter71 from "@/content/Chapter71";
import {
  chapter01Quiz,
  chapter02Quiz,
  chapter03Quiz,
  chapter04Quiz,
  chapter05Quiz,
  chapter06Quiz,
  chapter07Quiz,
  chapter08Quiz,
  chapter09Quiz,
  chapter10Quiz,
  chapter11Quiz,
  chapter12Quiz,
  chapter13Quiz,
  chapter14Quiz,
  chapter15Quiz,
  chapter16Quiz,
  chapter17Quiz,
  chapter18Quiz,
  chapter19Quiz,
  chapter20Quiz,
  chapter21Quiz,
  chapter22Quiz,
  chapter23Quiz,
  chapter24Quiz,
  chapter25Quiz,
  chapter26Quiz,
  chapter27Quiz,
  chapter28Quiz,
  chapter29Quiz,
  chapter31Quiz,
  chapter32Quiz,
  chapter33Quiz,
  chapter34Quiz,
  chapter35Quiz,
  chapter36Quiz,
  chapter37Quiz,
  chapter39Quiz,
  chapter40Quiz,
  chapter42Quiz,
  chapter43Quiz,
  chapter44Quiz,
  chapter45Quiz,
  chapter46Quiz,
  chapter47Quiz,
  chapter48Quiz,
  chapter50Quiz,
  chapter52Quiz,
  chapter53Quiz,
  chapter54Quiz,
  chapter55Quiz,
  chapter59Quiz,
  chapter61Quiz,
  chapter63Quiz,
  chapter66Quiz,
  chapter67Quiz,
  chapter68Quiz,
  chapter69Quiz,
  chapter70Quiz,
  chapter71Quiz,
} from "@/content/quiz";

type ChapterDef = { slug: string; Component: ComponentType; quiz: QuizQuestion[] };

const fiftyDaysChapters: ChapterDef[] = [
  { slug: "01", Component: Chapter01, quiz: chapter01Quiz },
  { slug: "02", Component: Chapter02, quiz: chapter02Quiz },
  { slug: "03", Component: Chapter03, quiz: chapter03Quiz },
  { slug: "04", Component: Chapter04, quiz: chapter04Quiz },
  { slug: "05", Component: Chapter05, quiz: chapter05Quiz },
  { slug: "06", Component: Chapter06, quiz: chapter06Quiz },
  { slug: "07", Component: Chapter07, quiz: chapter07Quiz },
  { slug: "08", Component: Chapter08, quiz: chapter08Quiz },
  { slug: "09", Component: Chapter09, quiz: chapter09Quiz },
  { slug: "10", Component: Chapter10, quiz: chapter10Quiz },
  { slug: "11", Component: Chapter11, quiz: chapter11Quiz },
  { slug: "12", Component: Chapter12, quiz: chapter12Quiz },
  { slug: "13", Component: Chapter13, quiz: chapter13Quiz },
  { slug: "14", Component: Chapter14, quiz: chapter14Quiz },
  { slug: "15", Component: Chapter15, quiz: chapter15Quiz },
  { slug: "16", Component: Chapter16, quiz: chapter16Quiz },
  { slug: "17", Component: Chapter17, quiz: chapter17Quiz },
  { slug: "18", Component: Chapter18, quiz: chapter18Quiz },
  { slug: "19", Component: Chapter19, quiz: chapter19Quiz },
  { slug: "20", Component: Chapter20, quiz: chapter20Quiz },
  { slug: "21", Component: Chapter21, quiz: chapter21Quiz },
  { slug: "22", Component: Chapter22, quiz: chapter22Quiz },
  { slug: "23", Component: Chapter23, quiz: chapter23Quiz },
  { slug: "24", Component: Chapter24, quiz: chapter24Quiz },
  { slug: "25", Component: Chapter25, quiz: chapter25Quiz },
  { slug: "26", Component: Chapter26, quiz: chapter26Quiz },
  { slug: "27", Component: Chapter27, quiz: chapter27Quiz },
  { slug: "28", Component: Chapter28, quiz: chapter28Quiz },
  { slug: "29", Component: Chapter29, quiz: chapter29Quiz },
  { slug: "31", Component: Chapter31, quiz: chapter31Quiz },
  { slug: "32", Component: Chapter32, quiz: chapter32Quiz },
  { slug: "33", Component: Chapter33, quiz: chapter33Quiz },
  { slug: "34", Component: Chapter34, quiz: chapter34Quiz },
  { slug: "35", Component: Chapter35, quiz: chapter35Quiz },
  { slug: "36", Component: Chapter36, quiz: chapter36Quiz },
  { slug: "37", Component: Chapter37, quiz: chapter37Quiz },
  { slug: "39", Component: Chapter39, quiz: chapter39Quiz },
  { slug: "40", Component: Chapter40, quiz: chapter40Quiz },
  { slug: "42", Component: Chapter42, quiz: chapter42Quiz },
  { slug: "43", Component: Chapter43, quiz: chapter43Quiz },
  { slug: "44", Component: Chapter44, quiz: chapter44Quiz },
  { slug: "45", Component: Chapter45, quiz: chapter45Quiz },
  { slug: "46", Component: Chapter46, quiz: chapter46Quiz },
  { slug: "47", Component: Chapter47, quiz: chapter47Quiz },
  { slug: "48", Component: Chapter48, quiz: chapter48Quiz },
  { slug: "50", Component: Chapter50, quiz: chapter50Quiz },
  { slug: "52", Component: Chapter52, quiz: chapter52Quiz },
  { slug: "53", Component: Chapter53, quiz: chapter53Quiz },
  { slug: "54", Component: Chapter54, quiz: chapter54Quiz },
  { slug: "55", Component: Chapter55, quiz: chapter55Quiz },
  { slug: "59", Component: Chapter59, quiz: chapter59Quiz },
  { slug: "61", Component: Chapter61, quiz: chapter61Quiz },
  { slug: "63", Component: Chapter63, quiz: chapter63Quiz },
  { slug: "66", Component: Chapter66, quiz: chapter66Quiz },
  { slug: "67", Component: Chapter67, quiz: chapter67Quiz },
  { slug: "68", Component: Chapter68, quiz: chapter68Quiz },
  { slug: "69", Component: Chapter69, quiz: chapter69Quiz },
  { slug: "70", Component: Chapter70, quiz: chapter70Quiz },
  { slug: "71", Component: Chapter71, quiz: chapter71Quiz },
];

const registry: Record<string, ChapterEntry> = Object.fromEntries(
  fiftyDaysChapters.map(({ slug, Component, quiz }) => [`math-basic/50days/${slug}`, { Component, quiz }])
);

export function getChapterEntry(subjectSlug: string, courseSlug: string, chapterSlug: string): ChapterEntry | undefined {
  return registry[`${subjectSlug}/${courseSlug}/${chapterSlug}`];
}
