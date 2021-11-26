export interface Question {
    answer: string;
}

export interface Voting {
    mode: string; // "Project" or "Community"
    status: string; // "Live" or "Finished"

    n: string;
    time_start: string;
    time_end: string;
    question: string;
    answers: Question[];
    results_verified: string;
}

export let LIVE = "Live";
export let FINISHED = "Finished";
export let PROJECT = "Project";
export let COMMUNITY = "Community";
