import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import MYDatePicker from "../../../components/form/MYDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement";

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

// warn : This is only for development
const studentDefaultValue = {
  name: {
    firstName: "Aishee",
    middleName: "Das",
    lastName: "Urmi",
  },
  gender: "male",
  // dateOfBirth: "1990-01-01",
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
};

const CreateStudent = () => {
  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

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
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValue}>
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
              <PHSelect options={genderOptions} name="gender" label="Gender" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <MYDatePicker name="dateOfBirth" label="DateOfBirth" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect
                options={bloodGroupOptions}
                name="bloodGroup"
                label="Blood Group"
              />
            </Col>
          </Row>

          <Divider>Contact Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="contactNo" label="Contact Number" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact Number"
              />
            </Col>

            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="parmanentAddress"
                label="Parmanent Address"
              />
            </Col>
          </Row>

          <Divider>Gaurdian</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.faterOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.fatherContactNo"
                label="Father Contact Number"
              />
            </Col>

            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="gaurdian.motherContactNo"
                label="Mother Contact Number"
              />
            </Col>
          </Row>

          <Divider>Local Gaurdian</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput type="text" name="localGaurdian.name" label="Name" />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGaurdian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGaurdian.contractNo"
                label="Contact Number"
              />
            </Col>

            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHInput
                type="text"
                name="localGaurdian.address"
                label="Address"
              />
            </Col>
          </Row>

          <Divider>Academic Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect
                options={semesterOptions}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            {/* <Col span={24} lg={{ span: 8 }} md={{ span: 12 }}>
              <PHSelect
                options={}
                name="academicDepartment"
                label="Academic Department"
              />
            </Col> */}
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
