import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProp = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
};

const PHForm = ({ onSubmit, children, defaultValues }: TFormProp) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
