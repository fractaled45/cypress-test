//Stick in any custom helper methods here
// Break them out into separate files when this gets too large

let UUID = 0;
export function UniqueId() {
  const getId = () => {
    UUID++;
    return UUID.toString();
  };
  return { getId };
}

export function ToSystemName(label: string) {
  label = label.toLocaleLowerCase();
  label = label.replace(" ", "-");
  return label;
}

export function fromAgo(isoTimestamp: string): string {
  const ms = Date.now() - new Date(isoTimestamp).getTime();

  const seconds = Math.round(ms / 1000);
  const minutes = Math.round(ms / 60000);
  const hours = Math.round(ms / 3600000);
  const days = Math.round(ms / 86400000);
  const months = Math.round(ms / 2592000000);
  const years = Math.round(ms / 31104000000);

  switch (true) {
    case seconds < 60:
      return `${seconds} second(s) ago"`;
    case minutes < 60:
      return `${minutes} minute(s) ago"`;
    case hours < 24:
      return `${hours} hour(s) ago"`;
    case days < 30:
      return `${days} day(s) ago`;
    case months < 12:
      return `${months} month(s) ago`;
    default:
      return `${years} year(s) ago`;
  }
}

export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber != null) {
    let cleaned = phoneNumber.replace(/(?!\+)\D/g, "");
    let match = cleaned.match(/(\+\d{0,3}|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      let intlCode = match[1] && match[1][0] == "+" ? match[1] + " " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return phoneNumber;
  } else {
    return "";
  }
}
