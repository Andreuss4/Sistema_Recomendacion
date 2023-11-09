import React from 'react'

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
  } from "@material-tailwind/react";
  import {
      PresentationChartBarIcon,
      ShoppingBagIcon,
  } from "@heroicons/react/24/solid";
  import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
  } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
 
const Dashbo = () => {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
      <div className="flex flex-col">
        <Card className="fixed left-0 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto prueba5">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" className="text-white">
              Agro Advisor
            </Typography>
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform  ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 "
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 text-white" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-normal text-white"
                  >
                    Recomendaciones
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/CebollaRoja" className="text-blue-gray text-white">
                      Cebolla
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/PapaAmarilla" className="text-blue-gray text-white">
                      Papa
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/ArvejaVerde" className="text-blue-gray text-white">
                      Arveja
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            {/*<Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5 text-white" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-normal text-white"
                  >
                    Predicción para Mañana
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/CebollaRP" className="text-blue-gray text-white">
                      Cebolla
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/PapaM" className="text-blue-gray text-white">
                      Papa
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/ArvejaVR" className="text-blue-gray text-white">
                      Arveja
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>*/}
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5 text-white" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-normal text-white"
                  >
                    Comparativa
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/CebollaRC" className="text-blue-gray text-white">
                      Cebolla
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/PapaAC" className="text-blue-gray text-white">
                      Papa
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/ArvejaVCo" className="text-blue-gray text-white">
                      Arveja
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
          </List>
          {/* Los anuncios*/}
          <Alert
            open={openAlert}
            className="mt-auto bg-gray-800"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Estudiantes de la UPC
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Andres Antonio Assereto Huamani || Davis Alessandro Suclle Surco
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
            </div>
          </Alert>
        </Card>
      </div>
    );
}

export default Dashbo
