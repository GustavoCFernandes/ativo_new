export function filterContactsByType(
  infoContacts: Array<{ foreigner: boolean; [key: string]: any }>,
  foreigner: boolean,
  field: 'email' | 'phone'
) {
  return infoContacts
    .filter((contact: { foreigner: boolean }) => contact.foreigner === foreigner)
    .map((contact: { [x: string]: any }) => contact[field]);
}
