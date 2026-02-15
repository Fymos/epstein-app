import { useState, useMemo } from 'react'

function App() {
  const [entries, setEntries] = useState([
    { id: 1, name: "Prince H.", status: "Under Investigation", clearance: "Top Secret" },
    { id: 2, name: "Bill G.", status: "Access Denied", clearance: "Restricted" },
    { id: 3, name: "Donald T.", status: "Archived", clearance: "Public" },
  ]);

  const [search, setSearch] = useState("");

  const filteredEntries = useMemo(() => {
    return entries.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, entries]);

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>

      <header style={styles.header}>
        <h1 style={styles.glitch}>LITTLE SAINT JAMES EPSTEIN // DATABASE</h1>
        <p>Logged in as: <strong>Fymos@arch-v15</strong></p>
      </header>

      <section style={styles.controls}>
        <input 
          type="text" 
          placeholder="Search suspects..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
      </section>

      <main style={styles.grid}>
        {filteredEntries.map(entry => (
          <div key={entry.id} style={styles.card}>
            <h3>{entry.name}</h3>
            <p>Status: <span style={{color: '#ff4444'}}>{entry.status}</span></p>
            <p>Clearance: <strong>{entry.clearance}</strong></p>
            <button 
              onClick={() => setEntries(entries.filter(i => i.id !== entry.id))}
              style={styles.deleteBtn}
            >
              [ REDACTED ]
            </button>
          </div>
        ))}
      </main>
      </div>
    </div>
  )
}

const styles = {
  container: { 
    backgroundColor: '#050505', 
    color: '#00ff41', 
    minHeight: '100vh', 
    width: '100vw',
    display: 'flex',          
    flexDirection: 'column',  
    alignItems: 'center',     
    justifyContent: 'center', 
    fontFamily: 'monospace',
    overflowX: 'hidden'
  },

  contentWrapper: {
    width: '90%',
    maxWidth: '800px',
    margin: '30px',
    padding: '30px',
    border: '1px solid #00ff41',
    backgroundColor: 'rgba(0, 255, 65, 0.05)', 
    backdropFilter: 'blur(10px)',            
    boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
    borderRadius: '8px'
  },

  header: { 
    textAlign: 'center',
    borderBottom: '1px solid #00ff41', 
    marginBottom: '30px', 
    paddingBottom: '20px' 
  },

  input: { 
    backgroundColor: 'transparent', 
    border: '1px solid #00ff41', 
    color: '#00ff41', 
    padding: '12px', 
    width: '100%', 
    marginBottom: '30px',
    outline: 'none',
    boxSizing: 'border-box'
  },

  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
    gap: '20px' 
  }
}

export default App