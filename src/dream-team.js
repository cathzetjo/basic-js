/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if (!members) {
        return false
    }
    let name = 0;
    let arr = [];

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
            name = 1;
            arr.push(members[i].trim().charAt(0).toUpperCase());
        }
    }
    return name === 0 ? false : (arr.sort().join(''));
}
