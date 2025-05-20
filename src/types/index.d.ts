
type Status = 'Ready' | 'In Progress' | 'Acknowledged' | 'Pending';
type CardStatusProps = {
  branch: string,
  cardType: string,
  quantity: number,
  status: Status,
}