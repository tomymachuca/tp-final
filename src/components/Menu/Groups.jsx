import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomersComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [customers, ] = useState([
    {
      name: "Grupo capital",
      description: "los de futbol",
      users: 4,
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1256&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      ],
    },
    {
      name: "Grupo de la Costa",
      description: "Vacaciones 2025",
      users: 5,
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1256&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      ],
    },
  ]);

  const navigate = useNavigate(); // Hook de navegación

  // Función para redirigir a la página de crear grupo
  const handleAddGroup = () => {
    navigate('/create-group', { state: { customers } }); // Redirigir a la página de creación de grupo
  };

  // Función para redirigir a la página de Team Members de un grupo específico
  const handleTeamMembersRedirect = (groupName) => {
    navigate('/team-members', { state: { groupName } });
  };

  // Función para mostrar el modal de confirmación de eliminación
  const handleDeleteGroup = (groupName) => {
    setGroupToDelete(groupName);
    setShowDeleteModal(true);
  };

  // Función para confirmar la eliminación
  const confirmDeleteGroup = () => {
    setShowDeleteModal(false);
    setDeleteConfirmation(true);
  };

  // Función para cerrar el mensaje de confirmación
  const closeConfirmation = () => {
    setDeleteConfirmation(false);
    setGroupToDelete(null);
  };

  return (
    <section className="bg-white min-h-screen flex justify-center items-start md:pl-64 mt-16">
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800">Grupos</h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-200 rounded-full">
                {customers.length} Grupos
              </span>
            </div>
          </div>

          {/* Botón para agregar grupo */}
          <div className="flex items-center gap-x-3 mt-4 sm:mt-0">
            <button
              onClick={handleAddGroup}
              className="flex items-center justify-center w-auto px-4 py-1.5 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg gap-x-2 hover:bg-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Agregar Grupo</span>
            </button>
          </div>
        </div>

        {/* Tabla de grupos */}
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-2 px-2 text-xs sm:text-sm font-normal text-left text-black">
                        Nombre
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left text-black">
                        Descripción
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left text-black">
                        Usuarios
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left text-black">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer, index) => (
                      <tr key={index}>
                        <td
                          className="px-2 py-2 text-xs sm:text-sm font-medium whitespace-nowrap text-blue-500 cursor-pointer hover:underline"
                          onClick={() => handleTeamMembersRedirect(customer.name)}
                        >
                          <div>
                            <h2 className="font-medium text-gray-800">{customer.name}</h2>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <div>
                            <p className="text-gray-500">{customer.description}</p>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <div className="flex items-center">
                            {customer.images.slice(0, 3).map((img, idx) => (
                              <img key={idx} className="object-cover w-5 h-5 -mx-1 border-2 border-white rounded-full" src={img} alt={`user-${idx}`} />
                            ))}
                            {customer.users > 3 && (
                              <p className="flex items-center justify-center w-5 h-5 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                +{customer.users - 3}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDeleteGroup(customer.name)}
                            className="px-4 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación de eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-4">¿Está seguro que quiere eliminar el grupo {groupToDelete}?</h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteGroup}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Sí, Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje de confirmación de eliminación */}
      {deleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Se ha enviado un correo a cada miembro</h2>
            <p className="text-gray-600 mb-4">
              Si todos están de acuerdo, el grupo será cerrado. Muchas gracias.
            </p>
            <button
              onClick={closeConfirmation}
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomersComponent;
