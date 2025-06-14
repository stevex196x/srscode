'use server';

import {
  Card,
  createEmptyCard,
  formatDate,
  fsrs,
  generatorParameters,
  Grades,
  Rating,
  State,
} from 'ts-fsrs';
import sql from './data';

const params = generatorParameters({ enable_fuzz: true, enable_short_term: false });
const f = fsrs(params);

async function insertCard({
  difficulty,
  due,
  elapsed_days,
  lapses,
  last_review,
  learning_steps,
  reps,
  scheduled_days,
  stability,
  state,
}: Card) {
  const newCard = await sql`
    INSERT INTO cards
      (difficulty, due, elasped_days, lapses, last_review, learning_steps, reps, scheduled_days, stability, state)
    VALUES
      (${difficulty}, ${due}, ${elapsed_days}, ${lapses}, ${last_review}, ${learning_steps}, ${reps}, ${scheduled_days}, ${stability}, ${state})
    returning difficulty, due, elasped_days, lapses, last_review, learning_steps, reps, scheduled_days, stability, state
  `;
  return newCard;
}

export async function createNewCard() {
  const card: Card = createEmptyCard();
  const now = new Date();
  const scheduling_cards = f.repeat(card, now);
  card.last_review = null;

  for (const item of scheduling_cards) {
    // grades = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]
    const grade = item.log.rating;
    const { log, card } = item;
  }
  console.log(card);
  const test = insertCard(card);
  console.log('inserted card');
  console.log(test);
}

// export function solveNewProblem() {}

// export function rateProblemDifficulty() {}
