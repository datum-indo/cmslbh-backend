import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentCreateOrConnectWithoutPersonInput } from "../inputs/PersonDocumentCreateOrConnectWithoutPersonInput";
import { PersonDocumentCreateWithoutPersonInput } from "../inputs/PersonDocumentCreateWithoutPersonInput";
import { PersonDocumentWhereUniqueInput } from "../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [PersonDocumentCreateWithoutPersonInput], {
    nullable: true
  })
  create?: PersonDocumentCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: PersonDocumentCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonDocumentWhereUniqueInput[] | undefined;
}
