
CREATE TABLE [dbo].[zlecenia] (
    [RMA]            SMALLINT    NOT NULL,
    [imie]           NCHAR (20)  NULL,
    [nazwisko]       NCHAR (30)  NULL,
    [nr_tel]         INT         NULL,
    [data_przyjecia] DATE        NULL,
    [rodzaj]         NCHAR (20)  NULL,
    [marka]          NCHAR (20)  NULL,
    [model]          NCHAR (20)  NULL,
    [usterka]        NCHAR (300) NULL,
    [status]         NCHAR (20)  NULL,
    [koszt_naprawy]  MONEY       NULL,
    [koszt_czesci]   MONEY       NULL,
    [informacje]     NCHAR (100) NULL,
    CONSTRAINT [PK_zlecenia] PRIMARY KEY CLUSTERED ([RMA] ASC)
);
test