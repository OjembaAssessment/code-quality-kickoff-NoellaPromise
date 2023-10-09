export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);

  const passwordRegex =
    /^(?=.\d+)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]){4,10}(?!.*0123|.*1234|.*2345|.*3456|.*4567|.*5678|.*6789|.*3210|.*4321|.*5432|.*6543|.*7654|.*8765|.*9876|.*1122|.*2233|.*3344|.*4455|.*5566|.*6677|.*7788|.*8899|.*9900|.*0011|.*1100|$/gm;
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
