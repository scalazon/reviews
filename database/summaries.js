const { getReviewsDatabase } = require('./mongodb.js');

const collectionName = 'Reviews';

const validASINs = [
  'B077L6KSGM',
  'B00GN92MM6',
  'B01FXC7JWQ',
  'B018GGK38S',
  'B06XKTTG8Z',
  'B0752XNC8M',
  'B075H7Z5L8',
  'B01DVSBQZA',
  'B07RGXWSQD',
  'B00GN92KQ4',
  'B06ZXWVZ3X',
  'B073WYP317',
  'B07G3ZNK4Y',
  'B077SVYQ3Y',
  'B07QXM2V6X',
  'B0795ZW85G',
  'B07NQT85FC',
  'B01D1NMLJU',
  'B07KSM8QY3',
  'B0186JAEWK',
  'B07894S727',
  'B073FZ8PP9',
  'B0771NM4R5',
  'B00LYGIEU2',
  'B077L6KSGM',
  'B01NAR617Y',
  'B017X57F3E',
  'B07C2T847W',
  'B00M8R8GH2',
  'B0772VGGC9',
  'B07MCW6HT4',
  'B07B4RN7JP',
  'B079BP867L',
  'B07STBSNWY',
  'B07HJJBLDT',
  'B07SJMTSTG',
  'B07SM97WGB',
  'B07SL6D2YB',
  'B07SD966F8',
  'B00O3PMNY4',
  'B07SNF1KRG',
  'B073TZPLML',
  'B07CQTPB3K',
  'B07D9G4SBZ',
  'B07KW97D3D',
  'B07CLVJGRW',
  'B079VYKYS3',
  'B07PSQKDDZ',
  'B07MQWZ1S3',
  'B07DX8N2P2',
  'B00VWBPOK2',
  'B07PL2VM1J',
  'B07BHPGKRX',
  'B07QGWMYW5',
  'B07BWJGMJ6',
  'B07C29MVY2',
  'B01I5RD10K',
  'B01N7T7VUI',
  'B00M365SDS',
  'B071WMWBY1',
  'B07H42VDLQ',
  'B072R53FRZ',
  'B07P2W8CDB',
  'B07QQP6K98',
  'B07R2B5TP5',
  'B07BMQ8SJQ',
  'B078RF8XN1',
  'B0716BK5B6',
  'B07FXP921H',
  'B07SZ4V6WJ',
  'B07MCNZQRY',
  'B07LBQRZGC',
  'B07FCBDHJT',
  'B071158G68',
  'B07PWJQL6D',
  'B07PB326XM',
  'B07RRPW5SF',
  'B01713X3ES',
  'B07CGK6WT3',
  'B07BMLTBDB',
  'B072JSQ2HC',
  'B01KUGJDB0',
  'B07MZL8Y9B',
  'B06XFDC144',
  'B00G2GB3M0',
  'B06XFDC144',
  'B01N5WYXCM',
  'B071LBHCFQ',
  'B01KUGV3DQ',
  'B01KUH558O',
  'B01KU6KTHM',
  'B07CZ5T1KF',
  'B00O8WZ0O2',
  'B07DBFX24N',
  'B07QZ43PTX',
  'B019BPYNB6',
  'B0722Z58DR',
  'B07G37ZJBS'
];

let ASINcounter = Math.floor(Math.random() * (validASINs.length - 0 + 1) + 0);

function currentASINs() {
  return getReviewsDatabase()
    .collection(collectionName)
    .distinct('asin');
}

function currentValidASINs() {
  return getReviewsDatabase()
    .collection(collectionName)
    .distinct('asin')
    .then(array => {
      return validASINs.filter(value => !array.includes(value));
    });
}

function currentInvalidASINs() {
  return getReviewsDatabase()
    .collection(collectionName)
    .distinct('asin')
    .then(array => {
      return array.filter(value => !validASINs.includes(value));
    });
}

async function bulkUpdateASINs() {}

function updateOneASIN() {
  ASINcounter = Math.floor(Math.random() * (validASINs.length - 0 + 1) + 0);
  return getReviewsDatabase()
    .collection(collectionName)
    .findOneAndUpdate(
      { asin: { $nin: validASINs } },
      { $set: { asin: validASINs[ASINcounter] } }
    );
}

module.exports = { currentASINs, updateOneASIN };
