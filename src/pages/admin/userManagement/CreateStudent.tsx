import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";

const studentDummyData = {
  password: "monermoto",
  student: {
    id: "123",
    name: {
      firstName: "Aishee",
      middleName: "Das",
      lastName: "Urmi",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    bloodGroup: "A+",

    email: "transaction.doe@example.com",
    contactNo: "123-456-7890",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main Street, Cityville",
    parmanentAddress: "456 Oak Avenue, Townsville",

    gaurdian: {
      fatherName: "James Doe",
      faterOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },

    localGaurdian: {
      name: "Jane Doe",
      occupation: "Doctor",
      contractNo: "777-888-9999",
      address: "789 Pine Street, Villagetown",
    },

    profileImage: "path/to/profile/image.jpg",
    admissionSemester: "656f67895dcd025729c4e6b2",
    academicDepartment: "65728fac4d48bdd185ea3b90",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));
    // // !! This is for development just for checking
    // console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.firstName" label="FirstName" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>

            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="dateOfBirth" label="DateOfBirth" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
