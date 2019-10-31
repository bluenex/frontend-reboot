import React from 'react';

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,180,220,0.5)',
    borderColor: 'rgba(0,180,220,0.9)',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  wrapper: {
    display: 'flex',
  },
  aside: {
    padding: 30,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230,50,20,0.5)',
    borderColor: 'rgba(230,50,20,0.9)',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  subSection: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
  },
  article: {
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'rgba(20,190,40,0.5)',
    borderColor: 'rgba(20,190,40,0.9)',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  footer: {
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(180,50,10,0.5)',
    borderColor: 'rgba(180,50,10,0.9)',
    borderWidth: 1,
    borderStyle: 'solid',
  }
}

const HTML5Elements = () => (
  <section>
    <header style={styles.header}>
      <p>Frontend Reboot</p>
    </header>
    <div style={styles.wrapper}>
      <aside style={styles.aside}>
        <p>Aside</p>
      </aside>
      <section style={styles.subSection}>
        <article style={styles.article}>
          <p>
            Article 1
          </p>
        </article>
        <article style={styles.article}>
          <p>
            Article 2
          </p>
        </article>
      </section>
    </div>
    <footer style={styles.footer}>
      <p>
        Fetch Next!
      </p>
    </footer>
  </section>
);

export default HTML5Elements;