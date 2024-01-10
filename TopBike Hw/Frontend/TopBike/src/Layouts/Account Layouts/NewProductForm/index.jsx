import React from 'react'
import style from "./index.module.scss";
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as yup from "yup";
import Button from '../../../Components/Common Components/Button';
import axios from 'axios';
import { useUser } from '../../../Context/userContext';

const initialValues = {
  title: "",
  image: "",
  price: "",
  categories: "",
  discount: 0,
}

const NewProductSchema = yup.object().shape({
  title: yup.string().required("This is required!"),
  image: yup.string().required("This is required!"),
  price: yup.number().required("This is required!"),
  categories: yup.array().of(yup.string().required("Please, fill every field!")).required("This is required!"),
  discount: yup.number(),
})

function NewProductForm() {

  const { user } = useUser()

  async function handleFetch(values) {
    try {
      console.log(values);
      const response = await axios({
        method: "post",
        url:"http://localhost:5000/products",
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        data:values
      }).then(res=>res.data)

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewProductSchema}
      onSubmit={(values) => handleFetch(values)}
      render={({ values }) => (
        <Form className={style.form}>

          <Field name="title" placeholder="Title. . ." />
          <ErrorMessage name='title' />

          <Field name="image" placeholder="Image url or a path to it" />
          <ErrorMessage name='image' />

          <Field name="price" placeholder="Price. . ." />
          <ErrorMessage name='price' />

          <Field name="discount" placeholder="Any discount... ?" />
          <ErrorMessage name='discount' />

          <FieldArray
            name="categories"
            render={arrayHelpers => (
              <div>
                {values.categories && values.categories.length > 0 ? (
                  values.categories.map((category, index) => (
                    <div className={style.categoryField} key={index}>
                      <Field name={`categories.${index}`} />
                      <button type="button" onClick={() => arrayHelpers.remove(index)}>
                        -
                      </button>
                      <button type="button" onClick={() => arrayHelpers.insert(index, '')}>
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add Category
                  </button>
                )}
              </div>
            )}
          />
          <ErrorMessage name='categories' />

          <Button type="submit">Submit</Button>
        </Form>
      )}
    >
    </Formik>
  )
}

export default NewProductForm