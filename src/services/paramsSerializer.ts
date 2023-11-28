const paramsSerializer = (obj: any) => {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          result.push(`${key}=${item}`);
        });
      } else if (typeof value === 'object') {
        for (const subKey in value) {
          if (value.hasOwnProperty(subKey)) {
            const subValue = value[subKey];
            result.push(`${key}[${subKey}]=${subValue}`);
          }
        }
      } else {
        result.push(`${key}=${value}`);
      }
    }
  }
  return result.join('&');
};

export default paramsSerializer;
