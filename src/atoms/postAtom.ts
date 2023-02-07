import { atom } from "recoil";
import { Timestamp } from "firebase/firestore";

export type Post = {
    id: string;
    communityId: string;
    communityImageURL?: string;
    userDisplayText: string; // change to authorDisplayText
    creatorId: string;
    title: string;
    body: string;
    numberOfComments: number;
    voteStatus: number;
    currentUserVoteStatus?: {
        id: string;
        voteValue: number;
    };
    imageURL?: string;
    postIdx?: number;
    createdAt?: Timestamp;
    editedAt?: Timestamp;
};