CREATE TABLE [dbo].[zlecenia](
	[RMA] [smallint] IDENTITY(1,1) NOT NULL,
	[id_klienta] [smallint] NOT NULL,
	[data_przyjecia] [datetime] NULL,
	[rodzaj] [nvarchar](20) NOT NULL,
	[marka] [nvarchar](20) NOT NULL,
	[model] [nvarchar](20) NOT NULL,
	[usterka] [nvarchar](300) NOT NULL,
	[koszt_naprawy] [money] NOT NULL,
	[koszt_czesci] [money] NULL,
	[data_wydania] [date] NULL,
	[status] [nvarchar](20) NOT NULL,
	[informacje] [nvarchar](100) NULL,
 CONSTRAINT [PK_zlecenia] PRIMARY KEY CLUSTERED 
(
	[RMA] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[zlecenia] ADD  DEFAULT (getdate()) FOR [data_przyjecia]
GO

ALTER TABLE [dbo].[zlecenia]  WITH CHECK ADD FOREIGN KEY([id_klienta])
REFERENCES [dbo].[klienci] ([id_klienta])
GO



Klienci:

CREATE TABLE [dbo].[klienci](
	[id_klienta] [smallint] IDENTITY(1,1) NOT NULL,
	[imie] [nvarchar](20) NOT NULL,
	[nazwisko] [nvarchar](30) NOT NULL,
	[nr_tel] [int] NULL,
	[nazwa] [nvarchar](50) NULL,
	[NIP] [int] NULL,
	[e-mail] [nvarchar](100) NULL,
 CONSTRAINT [PK_klienci] PRIMARY KEY CLUSTERED 
(
	[id_klienta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO