import React from "react-native";

const hairTypes = [
  {
    name: "Straight Hair",
    id: 0,
    children: [
      {
        name: "Type 1 - Straight Hair",
        id: "type1"
      }
    ]
  },
  {
    name: "Wavy Hair",
    id: 1,
    children: [
      {
        name: "Type 2A - Wavy Hair",
        id: "type2a"
      },
      {
        name: "Type 2B - Wavy Hair",
        id: "type2b"
      },
      {
        name: "Type 2C - Wavy Hair",
        id: "type2c"
      }
    ]
  },
  {
    name: "Curly Hair",
    id: 2,
    children: [
      {
        name: "Type 3A - Curly Hair",
        id: "type3a"
      },
      {
        name: "Type 3B - Curly Hair",
        id: "type3b"
      },
      {
        name: "Type 3C - Curly Hair",
        id: "type3c"
      }
    ]
  },
  {
    name: "Kinky Hair",
    id: 3,
    children: [
      {
        name: "Type 4A - Kinky Hair",
        id: "type4a"
      },
      {
        name: "Type 4B - Kinky Hair",
        id: "type4b"
      },
      {
        name: "Type 4C - Kinky Hair",
        id: "type4c"
      }
    ]
  },
  {
    name: "Uncategorized",
    id: 4,
    children: [
      {
        name: "I prefer not to use this hair typing system",
        id: "uncategorized_hair"
      }
    ]
  }
];

const hairLength = [
  {
    name: "Short Hair",
    id: 5,
    children: [
      {
        name: "Fresh Buzz",
        id: "BUZZ"
      },
      {
        name: "TWA - Teeny Weeny Afro",
        id: "TWA"
      },
      {
        name: "Ear Length",
        id: "EL"
      },
      {
        name: "Neck Length",
        id: "NL"
      }
    ]
  },
  {
    name: "Medium Hair",
    id: 6,
    children: [
      {
        name: "Shoulder Length",
        id: "SL"
      },
      {
        name: "Armpit Length",
        id: "APL"
      },
      {
        name: "Bra-Strap Length",
        id: "BSL"
      }
    ]
  },
  {
    name: "Long Hair",
    id: 7,
    children: [
      {
        name: "Mid-Back Length",
        id: "MBL"
      },
      {
        name: "Waist Length",
        id: "WL"
      },
      {
        name: "Hip Length",
        id: "HL"
      },
      {
        name: "Tail Bone Length",
        id: "TBL"
      },
      {
        name: "Classic Length",
        id: "CL"
      }
    ]
  },
  {
    name: "Extremely Long Hair",
    id: 8,
    children: [
      {
        name: "Mid-Thigh Length",
        id: "MTL"
      },
      {
        name: "Knee Length",
        id: "KL"
      },
      {
        name: "Calf Length",
        id: "CAL"
      },
      {
        name: "Ankle Length",
        id: "AL"
      },
      {
        name: "Floor Length",
        id: "FL"
      }
    ]
  }
];

export { hairTypes, hairLength };
