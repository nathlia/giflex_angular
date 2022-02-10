import { Artifact } from "./artifact.model";

export class Character {
    id?: number;
    name?: string;
    level?: string;
    critRate?: string;
    critDmg?: string;
    equippedArtifacts?: Artifact[];
}
