
class Helper {
  public checkCount<T>(content: T[] | T): string {
    let count = ''; 
    const length = Array.isArray(content) ? content?.length : content as number;
    if(length <= 999){
      if(Array.isArray(content)){
        if(length == 1 && content[0] == '') count = '0'
        else count = length.toString()
      }
      else count = length.toString()
    }
    else if(length > 999 && length <= 999_999)
      count = ((length / 1000).toFixed(1)).toString() + 'K'
    else if(length > 999_999 && length <= 999_999_999)
      count = ((length / 1000_000).toFixed(1)).toString() + 'M'
    else if(length > 999_999_999)
      count = ((length / 1000_000_000).toFixed(1)).toString() + 'B'
    return count
  }

  formatDate = (date: Date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' } as const;
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };

  public formatTime(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "America/Los_Angeles",
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  }

  formatNumber(price = 0, decimalPlace = 2) {
    return price.toFixed(decimalPlace).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
}
export const helper = new Helper();