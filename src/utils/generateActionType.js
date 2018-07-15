const generateActionType = name => ['REQUEST', 'SUCCESS', 'FAILURE'].reduce(
    (value, next) => Object.assign(value, { [next]: `${name}_${next}` }),
    Object.create(null)
)

export default generateActionType