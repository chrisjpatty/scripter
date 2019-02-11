export const ORDERED_COLORS = [
  {type: 'color', id: 1, color: "#ef5350"},
  {type: 'color', id: 2, color: "#EC407A"},
  {type: 'color', id: 3, color: "#AB47BC"},
  {type: 'color', id: 4, color: "#7E57C2"},
  {type: 'color', id: 5, color: "#5C6BC0"},
  {type: 'color', id: 6, color: "#42A5F5"},
  {type: 'color', id: 7, color: "#29B6F6"},
  {type: 'color', id: 8, color: "#26C6DA"},
  {type: 'color', id: 9, color: "#26A69A"},
  {type: 'color', id: 10, color: "#66BB6A"},
  {type: 'color', id: 11, color: "#9CCC65"},
  {type: 'color', id: 12, color: "#D4E157"},
  {type: 'color', id: 13, color: "#FFEE58"},
  {type: 'color', id: 14, color: "#FFCA28"},
  {type: 'color', id: 15, color: "#FFA726"},
  {type: 'color', id: 16, color: "#FF7043"},
  {type: 'color', id: 18, color: "#78909C"},
  {type: 'color', id: 17, color: "#ffffff", outline: true},
]

export const COLORS = ORDERED_COLORS.reduce((obj, c) => ({...obj, [c.id]: c}), {})
