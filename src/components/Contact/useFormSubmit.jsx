export function useContactFormSubmit() {
  async function submitContactForm(e, setStatus, setFormData, setSubmitted) {
    try {
      const response = await fetch('https://formspree.io/xyynokak', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(true);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return { submitContactForm }
};