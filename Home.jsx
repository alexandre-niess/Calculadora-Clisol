import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Home = () => {
    // Define o estado inicial
    const [estado, setEstado] = useState(false);

    // Função para lidar com o clique do botão e mudar o estado
    const handleClick = () => {
        setEstado(true);
    };

    // Definindo constantes para os valores dos campos de texto
    const Tafeta = 32.4;
    const Nate = 41;
    const Sarja22 = 41;
    const Sarja31 = 45;
    const Sarja21 = 41;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins',
                color: '#50494A',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '60%',
                    minWidth: '300px',
                }}
            >
                <img src="https://i.im.ge/2024/04/23/ZIN6KK.clisol.png" alt="Image" style={{ width: '200px', marginBottom: '20px', marginTop: '20px' }} />

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'left',
                }}>
                    <h3>Constantes do fator de cobertura teórico:</h3>
                </Box>

                <Grid container spacing={2} sx={{ marginTop: '-30px' }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="tafeta"
                            required
                            fullWidth
                            id="tafeta"
                            label="Tafeta"
                            disabled={estado} // Desabilita o campo se estado for true
                            value={Tafeta}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="nate"
                            label="Nate"
                            name="nate"
                            disabled={estado}
                            value={Nate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="sarja2x2"
                            required
                            fullWidth
                            id="sarja2x2"
                            label="Sarja 2x2"
                            disabled={estado}
                            value={Sarja22}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="sarja3x1"
                            label="Sarja 3x1"
                            name="sarja3x1"
                            disabled={estado}
                            value={Sarja31}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="sarja2x1"
                            label="Sarja 2x1"
                            name="sarja2x1"
                            disabled={estado}
                            value={Sarja21}
                        />
                    </Grid>
                </Grid>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '60%',
                    minWidth: '300px',
                }}
            >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'left',
                }}>
                    <h3>Variáveis informadas pelo usuário:</h3>
                </Box>

                <Grid container spacing={2} sx={{ marginTop: '-30px' }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor1"
                            label="Variável 1"
                            name="valor1"
                            disabled={estado}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor2"
                            label="Variável 2"
                            name="valor2"
                            disabled={estado}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor3"
                            label="Variável 3"
                            name="valor3"
                            disabled={estado}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor4"
                            label="Variável 4"
                            name="valor4"
                            disabled={estado}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor5"
                            label="Variável 5"
                            name="valor5"
                            disabled={estado}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="valor6"
                            label="Variável 6"
                            name="valor6"
                            disabled={estado}
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    sx={{ marginBottom: '20px', width: '100%', color: '#452400' }}
                    disabled={estado} // Desabilita o botão se estado for true
                >
                    Calcular
                </Button>
            </Box>
            {/* Renderiza "teste" apenas se estado for falso */}
            {estado &&
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        width: '60%',
                        minWidth: '300px',
                    }}
                >
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'left',
                    }}>
                        <h3>Resultados dos cálculos:</h3>
                    </Box>
                    <Grid container spacing={2} sx={{ marginTop: '-30px' }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="tafeta"
                                required
                                fullWidth
                                id="tafeta"
                                label="Tafeta"

                                disabled
                                value={Tafeta}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="nate"
                                label="Nate"
                                name="nate"
                                disabled
                                value={Nate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="sarja2x2"
                                required
                                fullWidth
                                id="sarja2x2"
                                label="Sarja 2x2"

                                value={Sarja22}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="sarja3x1"
                                label="Sarja 3x1"
                                name="sarja3x1"
                                value={Sarja31}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ marginBottom: '40px' }}>
                            <TextField
                                required
                                fullWidth
                                id="sarja2x1"
                                label="Sarja 2x1"
                                name="sarja2x1"
                                value={Sarja21}
                                disabled
                            />
                        </Grid>
                    </Grid>
                </Box>
            }
        </Box>
    );
}
export default Home;
