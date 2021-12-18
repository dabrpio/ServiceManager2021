using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CommandApi.Controllers;
using CommandApi.Dtos;
using CommandApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using CommandApi.Models;
using AutoMapper;
using FluentAssertions;

namespace Catalog.UnitTests;

    public class ClientControllerTests
    {
        private readonly Mock<IClientsRepo> repositoryStub = new();
        private readonly Mock<ILogger<ClientsController>> loggerStub = new();
        private readonly Random rand = new();

        private static IMapper _mapper;
        
        public ClientControllerTests()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new CommandApi.Profiles.ClientsProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetClientById_WithUnexistingItem_ReturnsNotFound()
        {
            // Arrange
            repositoryStub.Setup(repo => repo.GetClientById(It.IsAny<int>())).Returns((Client)null);

            var controller = new ClientsController(repositoryStub.Object, _mapper);

            // Act
            var result =  controller.GetClientById(It.IsAny<int>());

            // Assert
            result.Result.Should().BeOfType<NotFoundResult>();



        }

        
    }





