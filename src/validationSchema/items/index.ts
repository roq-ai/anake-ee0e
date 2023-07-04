import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  found_by: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
