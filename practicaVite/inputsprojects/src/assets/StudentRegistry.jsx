import React, { useState } from 'react';

const StudentRegistry = () => {
  const [students, setStudents] = useState([
    { name: 'Wilfredo', age: 26, id: '20140155' },
    { name: 'Bryan Miranda', age: 25, id: '20202020' }
  ]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '', id: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.age && newStudent.id) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', age: '', id: '' });
    }
  };

  // Estilos CSS integrados
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    },
    card: {
      background: 'rgba(30, 30, 46, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '1200px',
      boxShadow: `
        0 0 15px rgba(0, 242, 255, 0.2),
        0 0 30px rgba(255, 0, 242, 0.1),
        inset 0 0 10px rgba(255, 255, 255, 0.05)
      `,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden'
    },
    header: {
      position: 'relative',
      padding: '2rem',
      textAlign: 'center',
      background: 'linear-gradient(90deg, #00f2ff, #ff00f2)',
      color: '#111'
    },
    title: {
      margin: '0',
      fontSize: '2.2rem',
      fontWeight: '700',
      position: 'relative',
      zIndex: '2'
    },
    headerAccent: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      animation: 'shine 3s infinite'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      padding: '2rem'
    },
    section: {
      display: 'flex',
      flexDirection: 'column'
    },
    formCard: {
      background: 'rgba(20, 20, 35, 0.4)',
      borderRadius: '15px',
      padding: '1.5rem',
      height: '100%',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)'
    },
    sectionTitle: {
      color: '#00f2ff',
      marginTop: '0',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      color: '#e6f1ff',
      fontWeight: '500',
      fontSize: '0.95rem'
    },
    input: {
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(10, 10, 20, 0.5)',
      color: '#e6f1ff',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#00f2ff',
      boxShadow: '0 0 0 3px rgba(0, 242, 255, 0.2)'
    },
    submitBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
      padding: '1rem',
      borderRadius: '8px',
      border: 'none',
      background: 'linear-gradient(135deg, #00f2ff 0%, #ff00f2 100%)',
      color: '#111',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    tableContainer: {
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '10px',
      overflow: 'hidden'
    },
    tableHead: {
      background: 'linear-gradient(90deg, rgba(0, 242, 255, 0.3), rgba(255, 0, 242, 0.2))'
    },
    tableHeader: {
      padding: '1rem',
      textAlign: 'left',
      color: '#e6f1ff',
      fontWeight: '600',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    tableRow: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.2s ease'
    },
    tableCell: {
      padding: '1rem',
      color: '#e6f1ff',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    },
    studentId: {
      fontFamily: 'monospace',
      color: '#00f2ff'
    },
    // Animaciones
    '@keyframes shine': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' }
    }
  };

  return (
    <div style={styles.container}>
      {/* Inyectamos las animaciones como estilo global */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Registro de Estudiantes</h1>
          <div style={styles.headerAccent}></div>
        </header>
        
        <div style={styles.content}>
          <div style={styles.section}>
            <div style={styles.formCard}>
              <h2 style={styles.sectionTitle}>Agregar Estudiante</h2>
              <form onSubmit={addStudent} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Nombre:</label>
                  <input
                    type="text"
                    style={styles.input}
                    name="name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                    required
                    onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Edad:</label>
                  <input
                    type="number"
                    style={styles.input}
                    name="age"
                    value={newStudent.age}
                    onChange={handleInputChange}
                    required
                    onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Carnet:</label>
                  <input
                    type="text"
                    style={styles.input}
                    name="id"
                    value={newStudent.id}
                    onChange={handleInputChange}
                    required
                    onFocus={(e) => e.target.style = {...styles.input, ...styles.inputFocus}}
                    onBlur={(e) => e.target.style = styles.input}
                  />
                </div>
                <button type="submit" style={styles.submitBtn}>
                  <span>Agregar Estudiante</span>
                  <span>+</span>
                </button>
              </form>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.formCard}>
              <h2 style={styles.sectionTitle}>Listado de Estudiantes</h2>
              <div style={styles.tableContainer}>
                <table style={styles.table}>
                  <thead style={styles.tableHead}>
                    <tr>
                      <th style={styles.tableHeader}>Nombre</th>
                      <th style={styles.tableHeader}>Edad</th>
                      <th style={styles.tableHeader}>Carnet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={index} style={styles.tableRow}>
                        <td style={styles.tableCell}>{student.name}</td>
                        <td style={styles.tableCell}>{student.age}</td>
                        <td style={{...styles.tableCell, ...styles.studentId}}>{student.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistry;