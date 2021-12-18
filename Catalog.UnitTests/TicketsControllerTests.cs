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

    public class TicketControllerTests
    {
        private readonly Mock<ITicketsRepo> repositoryStub = new();
        private readonly Mock<ILogger<TicketsController>> loggerStub = new();
        private readonly Random rand = new();
        private static IMapper _mapper;
        
        public TicketControllerTests()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new CommandApi.Profiles.TicketsProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetTicketById_WithUnexistingItem_ReturnsNotFound()
        {
            // Arrange
            repositoryStub.Setup(repo => repo.GetTicketsByRma(It.IsAny<int>())).Returns((Ticket)null);

            var controller = new TicketsController(repositoryStub.Object, _mapper);

            // Act
            var result =  controller.GetTicketsByRma(It.IsAny<int>());

            // Assert
            result.Result.Should().BeOfType<NotFoundResult>();



        }

        
    }





