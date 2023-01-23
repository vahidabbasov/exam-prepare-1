import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

function Index() {
    const formik = useFormik({
        initialValues: {
          name: '',
          surname:'',
          position:'',
          image:'',
          description:''

        },
        onSubmit: values => {
          axios.post('http://localhost:2002/api/workers', values).then((res)=>{console.log(res.data);})
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            placeholder='name'
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
                      placeholder='surname'

            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surname}
          />
          <input
                      placeholder='position'

            id="position"
            name="position"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.position}
          />
          <input
                      placeholder='src for image'

            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <input
                      placeholder='description'

            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
    
          <button type="submit">Submit</button>
        </form>
      );
}

export default Index