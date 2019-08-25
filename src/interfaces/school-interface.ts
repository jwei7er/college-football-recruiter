export default interface School {
  id: string;
  name: string;
  conference: string;
  division?: string;
  nationalChampionships: number;
  overallRating: number;
  offenseRating: number;
  defenseRating: number;
}
