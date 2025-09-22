

import { useState } from 'react';
import { 
  Container, Typography, Box, TextField, 
  FormControl, InputLabel, Select, MenuItem, 
  Button, CircularProgress 
} from '@mui/material';
import axios from 'axios';

const EmailGenerator = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:9090/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    } catch (error) {
      setError('Failed to generate reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmailContent('');
    setTone('');
    setGeneratedReply('');
    setError('');
  };

  return (
    <section id="email-generator">
      <Container maxWidth="md" sx={{ py: { xs: 6, sm: 10, md: 14 }, px: { xs: 2, sm: 4, md: 0 } }}>
        <Typography variant="h4" gutterBottom align="center">
          Email Reply Generator
        </Typography>

        <Box sx={{ mx: { xs: 0, sm: 2, md: 0 } }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              sx={{ minHeight: 56 }} // same height as buttons
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          {/* Buttons */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              fullWidth
              sx={{ minHeight: 56 }} // match Tone box height
            >
              {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
            </Button>

            <Button
              variant="outlined"
              onClick={handleClear}
              fullWidth
              sx={{ minHeight: 56 }} // match Tone box height
            >
              Clear
            </Button>
          </Box>
        </Box>

        {error && (
          <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Generated Reply:</Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply || ''}
              inputProps={{ readOnly: true }}
            />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigator.clipboard.writeText(generatedReply)}
                fullWidth
                sx={{ minHeight: 56 }}
              >
                Copy to Clipboard
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClear}
                fullWidth
                sx={{ minHeight: 56 }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default EmailGenerator;
