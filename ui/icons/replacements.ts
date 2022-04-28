const getReplacement = (...themeProps) =>
  (color) => ({
    [color]: `{(theme.colors${themeProps.reduce(
      (str, prop) => `${str}.${prop}`,
      ''
    )}[props.color] || props.color) || "${color}"}`,
  })

export const replacements = {
  UploadIcon: getReplacement('background')('black'),
}
